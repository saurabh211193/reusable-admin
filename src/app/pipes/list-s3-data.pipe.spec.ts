import { ListS3DataPipe } from './list-s3-data.pipe';

describe('ListS3DataPipe', () => {
  it('create an instance', () => {
    const pipe = new ListS3DataPipe();
    expect(pipe).toBeTruthy();
  });
});
