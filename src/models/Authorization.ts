export enum AccountTypesEnum {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface Authorization {
  id: string;
  account: AccountTypesEnum;
}
