// src/qa/qa.module.ts

import { Module } from '@nestjs/common';
import { QaController } from './qa.controller';
import { QaService } from './qa.service';
import { QaDto } from './dtos/qa.dto';
import { QaDataRepository } from './qa-data.repository';


@Module({
  controllers: [QaController],
  providers: [QaService, QaDto, QaDataRepository],
})
export class QaModule {}
