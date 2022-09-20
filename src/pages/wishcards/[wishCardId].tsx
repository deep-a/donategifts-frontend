import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NavBar from '@/components/layout/NavBar';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'mission']))
    }
  };
}

export async function getStaticPaths() {
  // to be implemented with backend code
  const param: { wishCardId: string } = { wishCardId: '22' };
  const paths = [{ params: param }];
  return { paths, fallback: false };
}

export default function Wishcard(): JSX.Element {
  return (
    <>
      <NavBar />
      <div>Wishcard detail page</div>
    </>
  );
}
