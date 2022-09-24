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

export default function Contact() {
  return (
    <BaseLayout pageTitle="Contact Page">
      <div>
        <h1>hello this is a contact page</h1>
      </div>
    </BaseLayout>
  );
}
