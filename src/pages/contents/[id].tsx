import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

import { getDataDetail } from '../../api/getData';
import { DetailResult } from '../../components/templates/Detail';

const Detail = ({ detail }) => {
  return (
    <>
      <div className=" mx-auto my-6 w-4/5">
        <Link href="/">
          <a className=" m-2 block w-1/6 cursor-pointer rounded-md border border-indigo-700 bg-transparent px-4 py-1 text-center font-medium text-indigo-700">
            戻る
          </a>
        </Link>
        <DetailResult detail={detail} />
      </div>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const requestUrl = `https://api.jgrants-portal.go.jp/exp/v1/public/subsidies/id/${context.params.id}`;
  if (requestUrl) {
    const res = await getDataDetail(requestUrl);
    console.log('res = ', res);
    return {
      props: { detail: res[0] },
      notFound: !res,
    };
  }
};

export default Detail;
