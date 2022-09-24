import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BaseLayout from '@components/layout/BaseLayout';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'mission']))
    }
  };
}

export default function Community() {
  return (
    <BaseLayout pageTitle="Community Page">
      <h1>community page</h1>
    </BaseLayout>
  );
}
