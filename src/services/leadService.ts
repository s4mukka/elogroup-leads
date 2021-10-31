import { Lead } from '../domain/models';
import { AddLead, LoadLeads, UpdateLead } from '../domain/usecases';

export class LeadService implements AddLead, LoadLeads, UpdateLead {
  add = (lead: Lead): void => {
    const listLeads = this.load();

    listLeads.push(lead);

    localStorage.setItem('listLeads', JSON.stringify(listLeads));
  };

  load = (): Lead[] => {
    const listLeads = localStorage.getItem('listLeads');

    return listLeads ? JSON.parse(listLeads) : [];
  };

  update = (index: number, status: Lead['status']): void => {
    const listLeads = this.load();

    listLeads[index].status = status;

    localStorage.setItem('listLeads', JSON.stringify(listLeads));
  };
}
