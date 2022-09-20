import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LoginForm from '@/components/authentication/LoginForm';
import BaseLayout from '@/components/layout/BaseLayout';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'mission']))
    }
  };
}

export default function Login(): JSX.Element {
  return (
    <BaseLayout pageTitle="Login">
      <LoginForm />
    </BaseLayout>
  );
}
