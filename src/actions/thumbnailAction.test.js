import { ADD_STREAMER, addStreamer } from './thumbnailActions';

describe('post thumbnail', () => {
  it('can add a thumbnail', () => {
    expect(addStreamer('human001')).toEqual({
      type: ADD_STREAMER,
      payload: 'human001'
    });
  });
});
