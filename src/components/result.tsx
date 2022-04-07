import Link from 'next/link';
import React from 'react';

const Result = ({ res }) => {
  console.log('RESULT = ', res);

  return (
    <>
      {res.map((result) => (
        <div key={result.id} className="m-8 ">
          <p className="mx-4">{result.title}</p>
          <p className="mx-4">
            募集期間：{result.acceptance_start_datetime.substring(0, 10)}〜
            {result.acceptance_end_datetime.substring(0, 10)}
          </p>
          {/* <button onClick={() => Router.push({ query: { id: result.id } })}>
            詳細
          </button> */}
          <div className="flex justify-end">
            <Link href={`contents/${result.id}`}>
              <p className=" w-1/5 py-1 px-4 text-center font-medium rounded-md text-indigo-700 bg-transparent border border-indigo-700 cursor-pointer">
                詳細
              </p>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Result;
