export type userProfileType = {
  name: string;
  email: string;
  uid: string;
};

export type EventType = {
  description: string;
  id: number;
  name: string;
  fireId: string;
  time: string;
  venue: string;
  status: number | undefined;
  invitedBy: string | undefined;
  duration: number;
};

export type GuestType = {
  id: number;
  status: number;
  name: string;
  email: string;
};

export type ExpenditureType = {
  id: number;
  name: string;
  organization: string;
  quantity: number;
  unitPrice: number;
};
