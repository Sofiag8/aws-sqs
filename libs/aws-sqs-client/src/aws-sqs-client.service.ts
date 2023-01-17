import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';

@Injectable()
export class AwsSqsService {
  constructor(private readonly configService: ConfigService) {}

  async sqsSendMessage(message) {
    try {
      const client = new SQSClient({
        region: this.configService.get('awsRegion'),
        credentials: {
          accessKeyId: this.configService.get('awsAccessKeyId'),
          secretAccessKey: this.configService.get('awsSecretAccessKey'),
          sessionToken: this.configService.get('awsSessionToken'),
        },
      });

      const command = new SendMessageCommand({
        MessageBody: JSON.stringify(message),
        QueueUrl: this.configService.get('awsSqsQueueUrl'),
      });
      const response = await client.send(command);
      const result = { messageId: response.MessageId };
      return result;
    } catch (error) {
      // custom error
    }
  }
}
