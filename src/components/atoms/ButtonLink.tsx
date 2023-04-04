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
        <a className=" cursor-pointer rounded-md border border-indigo-700 bg-transparent px-4 py-2 text-center font-medium text-indigo-700">
          {linkName}
        </a>
      </Link>
    </div>
  );
};
