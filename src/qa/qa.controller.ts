import { Controller, Post, Body, Get, NotFoundException } from '@nestjs/common';
import { QaDto } from './dtos/qa.dto';
import { QaService } from './qa.service';
 


@Controller('qa')
export class QaController {
  constructor(private readonly qaService: QaService) {}


    
  @Post('answer')
  getAnswer(@Body() requestBody: { question: string }): string {
      
      try {
          
           console.log('question');
      
      
      const { question } = requestBody;

      console.log('question',question);
      
    return this.qaService.getAnswer(question);
          
      }

      catch (err) {
          
          console.log(err);
          throw new NotFoundException('error occured')
          
          
      }
      
       
  }

  @Post('submit')
  submitQa(@Body() qaDto: QaDto): string {
    return this.qaService.submitQa(qaDto);
  }
}
