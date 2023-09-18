import { Injectable } from '@nestjs/common';
import { QaDto } from './dtos/qa.dto';
import { QaDataRepository } from './qa-data.repository';

@Injectable()
export class QaService {
  constructor(private readonly qaDataRepository: QaDataRepository) {}

  getAnswer(question: string): string {
    const qaData = this.qaDataRepository.getQaData();
    for (const qaPair of qaData) {
      const [q, a] = qaPair.split('|');
      if (q === question) {
        return a;
      }
    }
    return "Sorry, I can't answer this question";
  }

   submitQa(qaDto: QaDto): string {
    this.qaDataRepository.addQaData(qaDto.question, qaDto.answer);
    return 'Question and answer submitted successfully';
  }
}
