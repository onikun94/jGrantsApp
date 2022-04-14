import { atom } from 'recoil';

export const subsidyState = atom({
  key: 'subsidyState',
  default: {
    title: '',
  },
});
