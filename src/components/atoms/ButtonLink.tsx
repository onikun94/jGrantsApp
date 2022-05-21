import Link from 'next/link';
import React from 'react';

type ButtonLinkPropsType = {
  hrefLink: string;
  linkName: string;
};

export const ButtonLink: React.VFC<ButtonLinkPropsType> = ({ hrefLink, linkName }) => {
  return (
    <div className="mx-4 mt-5">
      <Link href={hrefLink}>
        <a className=" py-2 px-4 text-center font-medium rounded-md text-indigo-700 bg-transparent border border-indigo-700 cursor-pointer">
          {linkName}
        </a>
      </Link>
    </div>
  );
};
