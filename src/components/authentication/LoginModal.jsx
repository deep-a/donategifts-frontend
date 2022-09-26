import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { Modal, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { loginResolver } from '@common/helper/FormHelper';
import { loginSubmit } from '@common/authentication/AuthenticationApi';
import Link from 'next/link';
import FormInput from './FormInput';

export default function LoginModal(props) {
  const { t } = useTranslation('common');
  const { onHide } = props;
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
    <Modal {...props} onHide={onHide} size="md" centered>
      <Modal.Dialog className="p-3">
        <Modal.Header>
          <Modal.Title className="center-elements w-100">
            <h2>{t('navBar.loginHyperLink')}</h2>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              containerClass="my-5"
              type="text"
              name="email"
              registerFunc={register}
              placeholder="Email"
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
              <button type="submit" className="btn-navy-orange-lg">
                {t('navBar.loginModal.button')}
              </button>
            </div>
          </Form>
          <div className="center-elements mt-3 fs-6">
            <span>
              {t('navBar.loginModal.signUpText')} <Link href="/signup">{t('navBar.signUpHyperLink')}</Link>
            </span>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
}

LoginModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired
};
