import AppData from './index';

describe('mock data spec', () => {
  it('should have length of 6', () => {
    expect(AppData).toHaveLength(6);
  });

  it('should have correct status', () => {
    expect(AppData).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ status: 'Ready' }),
        expect.objectContaining({ status: 'Booked' }),
        expect.objectContaining({ status: 'Pending' }),
      ])
    );
  });
});
