import * as fs from 'fs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QaDataRepository {
  private readonly filePath = 'qa-data.txt';

  getQaData(): string[] {
    const rawData = fs.readFileSync(this.filePath, 'utf-8');
    return rawData.split('\n');
  }

  addQaData(question: string, answer: string): void {
    const qaPair = `${question}|${answer}\n`;
    fs.appendFileSync(this.filePath, qaPair);
  }
}  
