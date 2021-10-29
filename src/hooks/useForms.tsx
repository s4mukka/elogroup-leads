import { ChangeEvent, useEffect, useState } from 'react';
import * as yup from 'yup';

type Retorno<T> = {
  values: T;
  changeValues: (
    event: ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => void;
  errors: Error<T>;
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
}: Props<T>): Retorno<T> {
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

  function changeValues(
    event: ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ): void {
    const fieldName = event.target.getAttribute('name') as string;
    const { value } = event.target;

    setValues((oldValues) => ({
      ...oldValues,
      [fieldName]: value,
    }));
  }

  return {
    values,
    changeValues,
    errors,
  };
}
