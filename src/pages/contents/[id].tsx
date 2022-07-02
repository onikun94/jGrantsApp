import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getDataDetail } from '../../api/getData';
import { DetailResult } from '../../components/templates/Detail';

const Detail = ({ detail }) => {
  const router = useRouter();

  return (
    <>
      <div className=" my-6 mx-auto w-4/5">
        <Link href="/">
          <a className=" block py-1 px-4 m-2 w-1/6 font-medium text-center text-indigo-700 bg-transparent rounded-md border border-indigo-700 cursor-pointer">
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
    return {
      props: { detail: res[0] },
      notFound: !res,
    };
  }
};

export default Detail;
