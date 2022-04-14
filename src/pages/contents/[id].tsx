import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { getData } from '../../api/getData';
import { subsidyState } from '../../recoil/atoms/subsidy';

const Detail = ({ detail }) => {
  const router = useRouter();
  const setTitle = useSetRecoilState(subsidyState);
  const { id } = router.query;

  const handleTitle = useCallback(() => {
    setTitle(detail.result[0].title);
  }, []);
  return (
    <div className=" mx-auto my-6 w-4/5">
      <Link href="/">
        <a className="m-2 w-1/6 py-1 px-4 text-center font-medium rounded-md text-indigo-700 bg-transparent border border-indigo-700 cursor-pointer">
          戻る
        </a>
      </Link>
      <Link href="/form">
        <a
          onClick={handleTitle}
          className="m-2 w-1/6 py-1 px-4 text-center font-medium rounded-md text-indigo-700 bg-transparent border border-indigo-700 cursor-pointer"
        >
          問い合わせ
        </a>
      </Link>
      <h1 className="my-2">{detail.result[0].title}</h1>
      <p dangerouslySetInnerHTML={{ __html: detail.result[0].detail }}></p>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const serverid = params.id;
  console.log('serverId = ', serverid);
  const url = `https://api.jgrants-portal.go.jp/exp/v1/public/subsidies/id/${serverid}`;
  const res = await getData(url);
  console.log(res);
  if (url) {
    return {
      props: {
        detail: res,
      },
    };
  } else {
    return {
      props: {
        detail: null,
      },
    };
  }
};
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   let requestUrl: string;
//   if (params === undefined) {
//     // requestUrl = `http://onikunblog.herokuapp.com/blog/jstest`;
//   } else {
//     const title = params.id;
//     console.log("paramsid = ", title);
//     // requestUrl = `http://onikunblog.herokuapp.com/blog/${title}`;
//   }

//   if (requestUrl) {
//     const response = await getData(requestUrl);
//     return {
//       props: { results: response },
//     };
//   } else {
//     return {
//       notFound: true,
//     };
//   }
// };

export default Detail;
