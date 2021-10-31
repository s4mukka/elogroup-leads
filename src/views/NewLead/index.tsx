import { useEffect } from 'react';
import { Header, Input } from '../../components';
import { useForm } from '../../hooks';
import { Table } from '../../styles';

import { Button, Container } from './styles';

const NewLead = (): JSX.Element => {
  const { values, changeValues, setValue } = useForm({
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
  });

  useEffect(() => {
    setValue('rpa', values.all);
    setValue('digitalProduct', values.all);
    setValue('analytics', values.all);
    setValue('rpm', values.all);
  }, [values.all]);

  return (
    <Container>
      <Header title="Novo Lead" />

      <form>
        <div>
          <Input
            type="text"
            name="name"
            label="Nome *"
            error=""
            onChange={changeValues}
          />
          <Input
            type="text"
            name="phone"
            label="Telefone *"
            error=""
            onChange={changeValues}
          />
          <Input
            type="email"
            name="email"
            label="Email *"
            error=""
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
