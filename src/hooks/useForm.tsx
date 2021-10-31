import { ChangeEvent, useEffect, useState } from 'react';
import * as yup from 'yup';

type Return<T> = {
  values: T;
  changeValues: (
    event: ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => void;
  errors: Error<T>;
  setValue: (fieldName: string, value: any) => void;
};

type Props<T> = {
  initialValues: T;
  scheme?: yup.BaseSchema;
};

type Error<T> = {
  [P in keyof T]: string;
};

export default function useForm<T = any>({
  initialValues,
  scheme,
}: Props<T>): Return<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Error<T>>({} as Error<T>);

  useEffect(() => {
    (async () => {
      try {
        await scheme?.validate(values, { abortEarly: false });
        setErrors({} as Error<T>);
      } catch (error) {
        const inners = (error as any).inner;
        const newErrors = {} as any;
        inners.forEach((err: any) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      }
    })();

    return () => {
      setErrors({} as Error<T>);
    };
    }, [values]); // eslint-disable-line

  const changeValues = (
    event: ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ): void => {
    const fieldName = event.target.getAttribute('name') as string;
    const { value, checked, type } = event.target;

    setValues((oldValues) => ({
      ...oldValues,
      [fieldName]: type === 'checkbox' ? checked : value,
    }));
  };

  const setValue = (fieldName: string, value: any): void => {
    setValues((oldValues) => ({
      ...oldValues,
      [fieldName]: value,
    }));
  };

  return {
    values,
    changeValues,
    errors,
    setValue,
  };
}
