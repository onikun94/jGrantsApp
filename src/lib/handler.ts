import Router from 'next/router';

export const handleInsertWord = (name: string, registerName, setValue: any) => {
  setValue(registerName, name);
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
