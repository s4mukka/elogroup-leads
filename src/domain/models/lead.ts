export type Lead = {
  name: string;
  phone: string;
  email: string;
  opportunities: {
    rpa: boolean;
    digitalProduct: boolean;
    analytics: boolean;
    rpm: boolean;
  };
  status: 'potentialCustomer' | 'confirmedData' | 'scheduledMeeting';
};
