import { Injectable } from '@nestjs/common';
import { AwsSqsException } from './aws-sqs-client.exception';
import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';

@Injectable()
export class AwsSqsService {
  async sqsSendMessage(message): Promise<any> {
    try {
      const client = new SQSClient({});

      const command = new SendMessageCommand({
        MessageBody: JSON.stringify(message),
        QueueUrl: process.env.AWS_SQS_URL,
      });
      const response = await client.send(command);
      if (response.MessageId && response.$metadata.httpStatusCode === 200) {
        return {
          messageId: response.MessageId,
          httpStatusCode: response.$metadata.httpStatusCode,
        };
      }
    } catch (error) {
      throw new AwsSqsException({
        reason: error.Code,
        status: error.$metadata.httpStatusCode,
      });
    }
  }
}
