import Link from "next/link";
import Router from "next/router";
import React from "react";

const Result = ({ res }) => {
  //   console.log("RESULT = ", res.);

  const handleDetail = ({ id }) => {
    console.log("id =======", id);
    Router.push({
      query: {
        id: id,
      },
    });
  };
  return (
    <>
      <p>result</p>
      {res.map((result) => (
        <div key={result.id}>
          <p>{result.title}</p>
          {/* <button onClick={() => Router.push({ query: { id: result.id } })}>
            詳細
          </button> */}

          <Link href={`contents/${result.id}`}>詳細</Link>
        </div>
      ))}
      <p>end</p>
    </>
  );
};

export default Result;
