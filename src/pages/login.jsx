import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BaseLayout from '@components/layout/BaseLayout';
import { useForm } from 'react-hook-form';
import { loginResolver } from '@common/helper/FormHelper';
import { loginSubmit } from '@common/authentication/AuthenticationApi';
import { Container, Form } from 'react-bootstrap';
import FormInput from '@components/authentication/FormInput';
import { useRouter } from 'next/router';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: loginResolver
  });

  const onSubmit = async (data) => {
    const result = await loginSubmit(data);

    if (result) {
      await router.push('/profile');
    }
  };

  return (
    <BaseLayout pageTitle="Login">
      <div id="login" className="py-5 center-elements">
        <Container className="p-md-5 w-50">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              containerClass="my-5"
              type="text"
              name="email"
              registerFunc={register}
              placeholder="Email/Username"
              errorMsg={errors.email?.message}
            />

            <FormInput
              containerClass="my-5"
              type="password"
              name="password"
              registerFunc={register}
              placeholder="Password"
              errorMsg={errors.password?.message}
            />

            <div className="center-elements">
              <button type="submit" className="btn-navy-white-lg">
                Log in
              </button>
            </div>
          </Form>
        </Container>
      </div>
    </BaseLayout>
  );
}
