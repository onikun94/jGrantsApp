import Router from 'next/router';

export const handleInsertWord = (name: string) => {
  const innerText = document.getElementById('inputText') as HTMLInputElement;
  innerText.value = name;
};

export const doHandleSubmit = (data) => {
  Router.push({
    query: {
      keyword: data.keyword,
      sort: data.sort,
      order: data.order,
      acceptance: data.restriction,
      prefecture: data.prefecture,
      industry: data.industry,
      employ: data.employ,
    },
  });
};
