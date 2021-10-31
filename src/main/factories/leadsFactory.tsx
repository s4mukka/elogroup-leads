import { LeadService } from '../../services';
import { Leads } from '../../views';

export const makeLeads = (): JSX.Element => (
  <Leads service={new LeadService()} />
);
