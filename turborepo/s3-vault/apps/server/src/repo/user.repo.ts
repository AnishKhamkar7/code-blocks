import { db } from '@server/utils/db';
import type { User, Prisma } from '@prisma/client';

export class UserRepo {
  async findUserByEmail(email: string) {
    return db.user.findUnique({
      where: { email },
      select: { id: true, name: true, strategy: true },
    });
  }

  getFullUser(email: string) {
    return db.user.findFirst({
      where: { email },
      include: {
        collaborations: { include: { role: true } },
        groups: true,
        Subscription: true,
      },
    });
  }

  createUser(data: { name: string; email: string }) {
    return db.user.create({
      data: { ...data, strategy: Strategy.EMAIL },
      include: {
        collaborations: { include: { role: true } },
        groups: true,
        Subscription: true,
      },
    });
  }

  findVerification(email: string) {
    return db.verification.findFirst({ where: { email } });
  }

  createVerification(data: { id?: string; email: string; name: string; type: string }) {
    return db.verification.create({ data });
  }

  getVerification(email: string, code: string) {
    return db.verification.findFirst({ where: { email, id: code } });
  }

  deleteVerification(id: string) {
    return db.verification.delete({ where: { id } });
  }
}
