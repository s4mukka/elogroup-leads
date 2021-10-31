import { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import toast from 'react-hot-toast';
import * as yup from 'yup';

import { Header, Input } from '../../components';
import { Lead } from '../../domain/models';
import { useForm } from '../../hooks';
import { LeadService } from '../../services';
import { Table } from '../../styles';

import { Button, Container } from './styles';

type NewLeadProps = {
  service: LeadService;
};

const NewLead = ({ service }: NewLeadProps): JSX.Element => {
  const history = useHistory();

  const [hasError, setHasError] = useState(false);

  const { values, changeValues, setValue, errors } = useForm({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      all: false,
      rpa: false,
      digitalProduct: false,
      analytics: false,
      rpm: false,
    },
    scheme: yup.object().shape({
      name: yup.string().required('Campo obrigatório!'),
      phone: yup.string().required('Campo obrigatório!'),
      email: yup.string().required('Campo obrigatório!'),
    }),
  });

  useEffect(() => {
    setValue('rpa', values.all);
    setValue('digitalProduct', values.all);
    setValue('analytics', values.all);
    setValue('rpm', values.all);
  }, [values.all]);

  useEffect(() => {
    setHasError(!!errors.name || !!errors.phone || !!errors.email);
  }, [errors]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (hasError) {
      return;
    }

    const lead: Lead = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      opportunities: {
        rpa: values.rpa,
        analytics: values.analytics,
        digitalProduct: values.digitalProduct,
        rpm: values.rpm,
      },
      status: 'potentialCustomer',
    };

    service.add(lead);
    toast.success('Lead adicionada com sucesso!');

    history.push('/leads');
  };

  return (
    <Container>
      <Header title="Novo Lead" />

      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            name="name"
            label="Nome *"
            error={errors.name}
            onChange={changeValues}
          />
          <Input
            type="text"
            name="phone"
            label="Telefone *"
            error={errors.phone}
            onChange={changeValues}
          />
          <Input
            type="email"
            name="email"
            label="Email *"
            error={errors.email}
            onChange={changeValues}
          />
        </div>

        <div>
          <span>Oportunidades *</span>
          <Table>
            <thead>
              <tr>
                <th>
                  <Input
                    type="checkbox"
                    name="all"
                    checked={values.all}
                    onChange={changeValues}
                  />
                </th>
                <th> </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <Input
                    type="checkbox"
                    name="rpa"
                    checked={values.rpa}
                    onChange={changeValues}
                  />
                </td>
                <td>
                  <p>RPA</p>
                </td>
              </tr>
              <tr>
                <td>
                  <Input
                    type="checkbox"
                    name="digitalProduct"
                    checked={values.digitalProduct}
                    onChange={changeValues}
                  />
                </td>
                <td>
                  <p>Produto Digital</p>
                </td>
              </tr>
              <tr>
                <td>
                  <Input
                    type="checkbox"
                    name="analytics"
                    checked={values.analytics}
                    onChange={changeValues}
                  />
                </td>
                <td>
                  <p>Analytics</p>
                </td>
              </tr>
              <tr>
                <td>
                  <Input
                    type="checkbox"
                    name="rpm"
                    checked={values.rpm}
                    onChange={changeValues}
                  />
                </td>
                <td>
                  <p>RPM</p>
                </td>
              </tr>
              <tr>
                <td />
                <td />
              </tr>
            </tbody>
          </Table>

          <Button>Salvar</Button>
        </div>
      </form>
    </Container>
  );
};

export default NewLead;
