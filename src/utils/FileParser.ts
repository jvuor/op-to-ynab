import { YNABTransaction } from '../interfaces';
import { Transaction } from './Transaction';

export class FileParser {
  public static parse(file: File): Promise<YNABTransaction[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.addEventListener('error', (e) => {
        // the whole app needs better error handling anyway
        // tslint:disable-next-line:no-console
        console.error(e);
        reject();
      });
      reader.addEventListener('load', () => {
        const YNABFile = FileParser.parseFile(reader.result);
        resolve(YNABFile);
      });
    });
  }

  private static parseFile(fileContent: string | ArrayBuffer | null) {
    if (typeof fileContent !== 'string') {
      return [];
    }

    const transactionRows = fileContent.split('\n').slice(1);
    const YNABTransactionRows: YNABTransaction[] = [];
    transactionRows.forEach((row) => {
      const transactionParser = new Transaction(row);
      YNABTransactionRows.push(transactionParser.export());
    });

    return YNABTransactionRows;
  }
}
