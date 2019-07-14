import { YNABDate } from "./ynab.date";

export interface YNABTransaction {
  date: YNABDate;
  payee: string | null;
  category: string | null;
  memo: string | null;
  outflow: string | null;
  inflow: string | null;
}
