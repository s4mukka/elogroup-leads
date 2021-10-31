import { Lead } from '../../models';

export interface UpdateLead {
  update: (index: number, status: Lead['status']) => void;
}
