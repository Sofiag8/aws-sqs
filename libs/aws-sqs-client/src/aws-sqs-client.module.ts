import { Module } from '@nestjs/common';
import { AwsSqsService } from './aws-sqs-client.service';

@Module({
  imports: [],
  providers: [AwsSqsService],
  exports: [AwsSqsService],
})
export class AwsSqsModule {}
