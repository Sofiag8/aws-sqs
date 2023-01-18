import { Injectable } from '@nestjs/common';
import { AwsSqsException } from './aws-sqs-client.exception';
import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';

@Injectable()
export class AwsSqsService {
  async sqsSendMessage(message): Promise<any> {
    try {
      const client = new SQSClient({
        region: process.env.AWS_REGION,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          sessionToken: process.env.AWS_SESSION_TOKEN,
        },
      });

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
