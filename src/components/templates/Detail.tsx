import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import { subsidyState } from '../../recoil/atoms/subsidy';
import { SubsidyDetailType } from '../../types/subsidy';

type DetailResultPropsType = {
  detail: SubsidyDetailType;
};

export const DetailResult = ({ detail }) => {
  const setTitle = useSetRecoilState(subsidyState);
  const handleTitle = useCallback(() => {
    setTitle(detail?.title);
  }, []);
  return (
    <div>
      <h1 className="my-4">{detail?.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: detail?.detail }}></p>
      <div className="m-2 text-center">
        <Image src="/contact1.png" width="300" height="61" objectFit="contain" />
        <Link href="/form">
          <a onClick={handleTitle} className=" m-2 block cursor-pointer">
            <Image src="/contact2.png" width="205" height="44" objectFit="contain" />
          </a>
        </Link>
      </div>
    </div>
  );
};
