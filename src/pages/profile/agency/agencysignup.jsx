import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BaseLayout from '@components/layout/BaseLayout';
import AgencyRegisterForm from '@components/authentication/AgencyRegisterForm';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'mission']))
    }
  };
}

export default function AgencySignUp() {
  return (
    <BaseLayout pageTitle="Register as a Foster Care Partner">
      <AgencyRegisterForm />
    </BaseLayout>
  );
}
