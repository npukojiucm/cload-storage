export type StateCheckFieldSlice = {
  [key: string]: string | boolean;
};

export type SetEmailOrLoginPayload = {
  value: string;
  field: string;
};
