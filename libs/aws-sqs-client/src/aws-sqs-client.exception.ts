import { HttpException } from '@nestjs/common';

export class AwsSqsException extends HttpException {
  constructor({ reason, status }) {
    super(reason, status);
  }
}
