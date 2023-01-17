import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AwsSqsService } from './aws-sqs-client.service';

@Module({
  imports: [ConfigModule, AwsSqsModule],
  providers: [AwsSqsService],
  exports: [AwsSqsService],
})
export class AwsSqsModule {}
