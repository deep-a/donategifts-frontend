import React, { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BaseLayout from '@components/layout/BaseLayout';
import { Container, Form } from 'react-bootstrap';
import FormInput from '@components/authentication/FormInput';
import PartnerModal from '@components/authentication/PartnerModal';
import { useForm } from 'react-hook-form';
import { registerResolver } from '@common/helper/FormHelper';
import { useRouter } from 'next/router';
import { registerSubmit } from '@common/authentication/AuthenticationApi';
import useUserStore from '@store/userStore';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'signUp']))
    }
  };
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: registerResolver
  });

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const { isLoggedIn, user, apiError, registerUser } = useUserStore();

  useEffect(() => {
    (async () => {
      if (isLoggedIn) {
        if (user.role === 'DONOR') {
          await router.push('/profile');
        } else {
          await router.push('/profile/agency/agency-signup');
        }
      } else if (apiError.data) {
        // TODO: add some indicator that an api error occurred
      }
    })();
  }, [isLoggedIn, user, apiError]);

  const onSubmit = async (data) => {
    setLoading(true);
    const { firstName, lastName, userRole, email, password } = data;

    const result = await registerSubmit({ email, password });

    if (result) {
      await registerUser({ firstName, lastName, userRole, email, jwt: result });
    } else {
      // TODO: add some error message here if register fails
      reset();
    }
  };

  const [show, setShow] = useState(false);
  const [tickedAgency, setTickedAgency] = useState(false);
  const [showAgencyForm, setShowAgencyForm] = useState(false);

  const handleShowModal = () => {
    setShow(!tickedAgency);
    setTickedAgency(!tickedAgency);

    if (showAgencyForm) {
      setShowAgencyForm(!showAgencyForm);
    }
  };

  const handleAcknowledged = () => {
    setShow(false);
    setShowAgencyForm(true);
  };

  return (
    <BaseLayout pageTitle="Sign Up">
      <div id="sign-up" className="py-5 center-elements">
        <Container className="p-md-5 w-90 w-md-50">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              type="text"
              className="form-control form-control-lg"
              name="firstName"
              registerFunc={register}
              placeholder="First name"
              errorMsg={errors.firstName?.message}
            />

            <FormInput
              type="text"
              className="form-control form-control-lg"
              name="lastName"
              registerFunc={register}
              placeholder="Last name"
              errorMsg={errors.lastName?.message}
            />

            <FormInput
              type="text"
              className="form-control form-control-lg"
              name="email"
              registerFunc={register}
              placeholder="Email"
              errorMsg={errors.email?.message}
            />

            <FormInput
              type="password"
              className="form-control form-control-lg"
              name="password"
              registerFunc={register}
              placeholder="Password"
              errorMsg={errors.password?.message}
            />

            <FormInput
              type="password"
              className="form-control form-control-lg"
              name="passwordConfirm"
              registerFunc={register}
              placeholder="Password confirm"
              errorMsg={errors.passwordConfirm?.message}
            />

            <div className="my-5 ms-3 form-check custom-input">
              <input
                {...register('isAgency')}
                type="checkbox"
                id="agency-switch"
                className="form-check-input"
                onClick={handleShowModal}
              />
              <label htmlFor="agency-switch" className="form-check-label">
                Sign up as Agency?
              </label>
            </div>

            <div className="center-elements">
              {loading && (
                <button type="submit" className="btn-navy-white-lg" disabled>
                  <div className="d-flex align-items-center">
                    <span>Loading</span>
                    <div className="spinner-border ms-2" role="status" aria-hidden="true" />
                  </div>
                </button>
              )}

              {!loading && (
                <button type="submit" className="btn-navy-white-lg">
                  Sign Up
                </button>
              )}
            </div>
          </Form>

          <PartnerModal show={show} onHide={handleAcknowledged} />
        </Container>
      </div>
    </BaseLayout>
  );
}
