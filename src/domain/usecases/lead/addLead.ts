import { Lead } from '../../models';

export interface AddLead {
  add: (lead: Lead) => void;
}
