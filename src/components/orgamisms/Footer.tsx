import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className=" flex mx-12 p-2   border-solid border-y-2  bg-white">
        <Image src="/logo.png" width="64" height="64" objectFit="contain" />
        <div className="block ml-4">
          <p>EXPACT株式会社</p>
          <p>〒430-0907</p>
          <p>静岡県浜松市中区高林1丁目8-43</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
