import { LeadService } from '../../services';
import { NewLead } from '../../views';

export const makeNewLead = (): JSX.Element => (
  <NewLead service={new LeadService()} />
);
