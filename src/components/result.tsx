import Link from 'next/link';
import React from 'react';
import Card from './atoms/Card';

const Result = ({ res }) => {
  console.log('RESULT = ', res);

  return (
    <>
      {res.map((result) => (
        <Card>
          <div key={result.id} className="m-8 p-8 ">
            <h2 className="mx-4 pb-1 border-b-2">
              {result.title.length > 30 ? `${result.title.substring(0, 40)}...` : result.title}
            </h2>
            <p className="mx-4">
              募集期間：{result.acceptance_start_datetime.substring(0, 10)}〜
              {result.acceptance_end_datetime.substring(0, 10)}
            </p>
            <p className="mx-4">補助金額上限：{result.subsidy_max_limit}円</p>
            {/* <button onClick={() => Router.push({ query: { id: result.id } })}>
            詳細
          </button> */}
            <div className="mx-4 mt-5 ">
              <Link href={`contents/${result.id}`}>
                <a className=" py-2 px-4 text-center font-medium rounded-md text-indigo-700 bg-transparent border border-indigo-700 cursor-pointer">
                  詳細
                </a>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default Result;
