export const getData = async (url: string) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: { accept: 'application/json' },
  });
  const _res = await res.json();

  return _res;
};

export const getDataDetail = async (url: string) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: { accept: 'application/json' },
  });
  const _res = await res.json();

  return _res.result;
};
