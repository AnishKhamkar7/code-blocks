import { BucketRepo } from '../repo/bucket.repo';

export class BucketController {
  private bucketRepository: BucketRepo;
  constructor(bucketRepo: BucketRepo) {
    this.bucketRepository = bucketRepo;
  }
}
