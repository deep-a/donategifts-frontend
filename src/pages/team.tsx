import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BaseLayout from '@/components/layout/BaseLayout';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'mission']))
    }
  };
}

export default function Team(): JSX.Element {
  return (
    <BaseLayout pageTitle="Team Page">
      <div>Team Page</div>
    </BaseLayout>
  );
}
