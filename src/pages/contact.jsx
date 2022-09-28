import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BaseLayout from '@components/layout/BaseLayout';
import { useForm } from 'react-hook-form';
import { contactResolver } from '@common/helper/FormHelper';
import { Container, Form } from 'react-bootstrap';
import FormInput from '@components/authentication/FormInput';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact']))
    }
  };
}

export default function Contact() {
  const {
    register,
    // handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: contactResolver
  });

  const { t } = useTranslation('contact');

  return (
    <BaseLayout pageTitle={t('pageTitle')}>
      <section id="contact" className="center-elements mb-5">
        <div className="d-flex flex-wrap pt-5 pb-4">
          <Container className="row d-flex justify-content-center">
            <div className="col-11 text-center">
              <h2>{t('section.heading')}</h2>
              <p>
                {t('section.instruction')}
                <Link href="/faq" className="link-faq">
                  {t('section.instruction2')}
                </Link>
                {t('section.instruction3')}
              </p>
            </div>
            <div className="col-11 d-flex justify-content-center align-items-center">
              <div className="contact-form-wrapper">
                <Form>
                  <div className=" col-md-12 d-flex flex-wrap justify-content-between">
                    <div className="col-md-6" id="contact-form-name">
                      <label htmlFor="name" className="contact-label">
                        {t('form.label.name')}
                      </label>
                      <FormInput
                        type="text"
                        name="name"
                        registerFunc={register}
                        placeholder={t('form.placeholder.name')}
                        errorMsg={errors.fullName?.message}
                      />
                    </div>
                    <div className="col-md-6" id="contact-form-email">
                      <label htmlFor="email" className="contact-label">
                        {t('form.label.email')}
                      </label>
                      <FormInput
                        id="email"
                        containerClass="mt-5"
                        type="email"
                        name="email"
                        registerFunc={register}
                        placeholder={t('form.placeholder.email')}
                        errorMsg={errors.email?.message}
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <Form.Label htmlFor="subject" className="contact-label">
                      {t('form.label.subject')}
                    </Form.Label>
                    <FormInput
                      id="subject"
                      containerClass="mt-3"
                      type="text"
                      name="subject"
                      registerFunc={register}
                      placeholder={t('form.placeholder.subject')}
                      errorMsg={errors.subject?.message}
                    />
                  </div>
                  <div id="contact-form-message" className="p-3 form-group">
                    <label htmlFor="message" className="contact-label">
                      {t('form.label.message')}
                    </label>
                    <textarea
                      rows="5"
                      id="message"
                      className="form-control contact-form-message mt-3"
                      {...register('message')}
                      placeholder={t('form.placeholder.message')}
                    />
                  </div>
                  <div className="center-elements pt-3">
                    <button type="submit" className="btn-navy-white-lg">
                      {t('form.button')}
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </BaseLayout>
  );
}
