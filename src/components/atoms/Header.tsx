import Image from 'next/image';
import React from 'react';

type HeaderPropsType = {
  src: string;
  width: string;
  height: string;
};

export const Header: React.VFC<HeaderPropsType> = ({ src, width, height }) => {
  return <Image src={src} width={width} height={height} objectFit="contain" alt="icon" />;
};
