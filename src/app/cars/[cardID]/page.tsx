'use client';
import { useParams } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';
import styles from './page-style.module.css';
import { useSession } from '@clerk/nextjs';
import { OUR_DOMAIN } from '@/app/components/url';

const Page: FC = () => {
  const params = useParams();
  const { session } = useSession();
  const [productDetail, setProductDetail] = useState<{
    description: string;
    url: { src: string };
  }>();

  const getCar = async () => {
    const res = await fetch(`${OUR_DOMAIN}/api/cars/${params?.cardID}`);
    if (res.ok) {
      const body = await res.json();
      setProductDetail(body.data);
    }
    
  };

  useEffect(() => {
    getCar();
  }, []);

  return (
    <div className={styles.productD}>
      {!session ? (
        ' '
      ) : (
        <p className={styles.name}>Hi, {session?.publicUserData?.firstName}</p>
      )}
      {productDetail && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element  */}
          <img src={`${OUR_DOMAIN}${productDetail?.url.src}`} alt="car" />
          <p>{productDetail?.description}</p>
        </>
      )}
    </div>
  );
};

export default Page;
