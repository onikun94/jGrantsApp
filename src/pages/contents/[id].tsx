import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { getData } from "../../api/getData";
import Link from "next/link";

const Detail = ({ detail }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Link href="/">戻る</Link>
      <h1>{detail.result[0].title}</h1>
      <p dangerouslySetInnerHTML={{ __html: detail.result[0].detail }}></p>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const serverid = params.id;
  console.log("serverId = ", serverid);
  const url = `https://api.jgrants-portal.go.jp/exp/v1/public/subsidies/id/${serverid}`;
  const res = await getData(url);
  console.log(res);
  if (true) {
    return {
      props: {
        detail: res,
      },
    };
  } else {
    return {
      props: {
        // keyword: "",
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
