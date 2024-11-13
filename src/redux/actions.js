// src/redux/actions.js

export const LIKE_TRACK = 'LIKE_TRACK';
export const UNLIKE_TRACK = 'UNLIKE_TRACK';
export const LOAD_LIKED_TRACKS = 'LOAD_LIKED_TRACKS';

export const likeTrack = (track) => ({
  type: LIKE_TRACK,
  payload: track,
});

export const unlikeTrack = (trackId) => ({
  type: UNLIKE_TRACK,
  payload: trackId,
});

export const loadLikedTracks = (tracks) => ({
  type: LOAD_LIKED_TRACKS,
  payload: tracks,
});