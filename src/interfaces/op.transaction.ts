import { OPDate } from './op.date';

export interface OPTransaction {
  recordDate: OPDate;
  valueDate: OPDate;
  amount: string;
  type: string;
  memo: string;
  counterpart: string;
  counterpartBankInfo: string;
  reference: string;
  message: string;
  id: string;
}
