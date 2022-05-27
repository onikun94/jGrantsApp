import { GetServerSideProps } from 'next';
import Image from 'next/image';
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
    <div className=" my-6 mx-auto w-4/5">
      <Link href="/">
        <a className=" block py-1 px-4 m-2 w-1/6 font-medium text-center text-indigo-700 bg-transparent rounded-md border border-indigo-700 cursor-pointer">
          戻る
        </a>
      </Link>
      <h1 className="my-4">{detail.result[0].title}</h1>
      <p dangerouslySetInnerHTML={{ __html: detail.result[0].detail }}></p>
      <div className="m-2 text-center">
        <Image src="/contact1.png" width="300" height="61" objectFit="contain" />
        <Link href="/form">
          <a onClick={handleTitle} className=" block m-2 cursor-pointer">
            <Image src="/contact2.png" width="205" height="44" objectFit="contain" />
          </a>
        </Link>
      </div>
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
