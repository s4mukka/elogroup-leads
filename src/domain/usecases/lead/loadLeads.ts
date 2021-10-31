import { Lead } from '../../models';

export interface LoadLeads {
  load: () => Lead[];
}
