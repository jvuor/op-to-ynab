import { OPDate, OPTransaction, YNABDate, YNABTransaction } from '../interfaces';

const OPFieldOrder = [
  'recordDate',
  'valueDate',
  'amount',
  'type',
  'memo',
  'counterpart',
  'counterpartBankInfo',
  'reference',
  'message',
  'id',
];

export class Transaction {
  private OPTransaction: OPTransaction;

  public constructor(transactionRow: string) {
    const transactionFields = transactionRow.split(';');
    const OPTr: any = {};
    OPFieldOrder.forEach((field, i) => {
      OPTr[field] = transactionFields[i].replace(/\"/g, '');
    });
    this.OPTransaction = OPTr as OPTransaction;
  }

  private static convertDate(date: OPDate): YNABDate {
    const [ year, month, day ] = date.split('-');
    return `${day}/${month}/${year}`;
  }

  private static isAmountNegative(amount: string): boolean {
    return amount.startsWith('-');
  }

  public export(): YNABTransaction {
    const date = Transaction.convertDate(this.OPTransaction.valueDate);
    const payee = this.OPTransaction.counterpart;
    const category = null;
    const memo = this.OPTransaction.memo;
    let inflow: string | null;
    let outflow: string | null;
    if (Transaction.isAmountNegative(this.OPTransaction.amount)) {
      inflow = null;
      outflow = this.OPTransaction.amount.slice(1);
    } else {
      inflow = this.OPTransaction.amount;
      outflow = null;
    }

    return {
      date,
      payee,
      category,
      memo,
      inflow,
      outflow,
    };
  }
}
