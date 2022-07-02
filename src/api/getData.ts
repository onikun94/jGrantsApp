export const getData = async (url: string) => {
  console.log(typeof url);
  console.log('thisurl = ', url);
  const res = await fetch(url, {
    method: 'GET',
    headers: { accept: 'application/json' },
  });
  const _res = await res.json();

  return _res;
};

export const getDataDetail = async (url: string) => {
  console.log(typeof url);
  console.log('thisurl = ', url);
  const res = await fetch(url, {
    method: 'GET',
    headers: { accept: 'application/json' },
  });
  const _res = await res.json();
  console.log('getDataDetail = ', _res);

  return _res.result;
};
