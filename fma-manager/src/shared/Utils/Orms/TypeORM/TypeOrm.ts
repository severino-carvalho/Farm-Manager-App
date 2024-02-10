import { ConflictException } from '@nestjs/common';
import { format } from 'date-fns';

export class TypeOrmUtils {
  static getSoftDeleteConst(): string {
    return '-' + format(new Date(), 'yyyyMMddhhmmssSSS');
  }

  static verifyIdFormat(value: string): void {
    const uuidRegex =
      /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

    if (!uuidRegex.test(value))
      throw new ConflictException('Invalid id', 'invalid-id');
  }
}
