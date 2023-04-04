import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className=" mx-12 flex border-y-2   border-solid bg-white  p-2">
        <Image src="/logo.png" width="64" height="64" objectFit="contain" />
        <div className="ml-4 block">
          <p>EXPACT株式会社</p>
          <p>〒430-0928</p>
          <p>静岡県浜松市中区板屋町102-15Dexi板屋町</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
