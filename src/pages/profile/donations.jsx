import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NavBar from '@components/layout/NavBar';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'mission']))
    }
  };
}

export default function Donations() {
  return (
    <>
      <NavBar />
      <div>Donations</div>
    </>
  );
}
