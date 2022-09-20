import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BaseLayout from '@/components/layout/BaseLayout';
import Register from '@/components/authentication/Register';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'mission']))
    }
  };
}

export default function SignUp(): JSX.Element {
  return (
    <BaseLayout pageTitle="Sign Up">
      <Register />
    </BaseLayout>
  );
}
