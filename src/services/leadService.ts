import { Lead } from '../domain/models';
import { AddLead, LoadLeads } from '../domain/usecases';

export class LeadService implements AddLead, LoadLeads {
  add = (lead: Lead): void => {
    const listLeads = this.load();

    listLeads.push(lead);

    localStorage.setItem('listLeads', JSON.stringify(listLeads));
  };

  load = (): Lead[] => {
    const listLeads = localStorage.getItem('listLeads');

    return listLeads ? JSON.parse(listLeads) : [];
  };
}
