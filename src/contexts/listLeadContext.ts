import { createContext } from 'react';

import { Lead } from '../domain/models';

export type ListLeadContextParams = {
  move: (index: number, status: Lead['status']) => void;
};

export const ListLeadContext = createContext({} as ListLeadContextParams);
