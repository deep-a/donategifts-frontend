import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BaseLayout from '@components/layout/BaseLayout';
import SignUpForm from '@components/authentication/SignUpForm';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}

export default function SignUp() {
  return (
    <BaseLayout pageTitle="Sign Up">
      <div id="sign-up" className="py-5 center-elements">
        <SignUpForm />
      </div>
    </BaseLayout>
  );
}
