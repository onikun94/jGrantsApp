import { atom } from 'recoil';

export const subsidyState = atom({
  key: 'subsidyState',
  default: {
    title: '',
  },
});

export const searchWordState = atom({
  key: 'searchWordState',
  default: {
    searchWord: '',
  },
});
