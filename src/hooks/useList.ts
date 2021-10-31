import { useContext } from 'react';

import { ListLeadContext, ListLeadContextParams } from '../contexts';

export const useList = (): ListLeadContextParams => useContext(ListLeadContext);
