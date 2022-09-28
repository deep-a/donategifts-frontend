import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BaseLayout from '@components/layout/BaseLayout';
import { useForm } from 'react-hook-form';
import { contactResolver } from '@common/helper/FormHelper';
import { Container, Form } from 'react-bootstrap';
import FormInput from '@components/authentication/FormInput';
import { useTranslation } from 'next-i18next';
import logger from '@common/utils/logger';

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
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: contactResolver
  });

  const { t } = useTranslation('contact');

  const sendMessage = (data) => {
    logger.log(data);
  };

  return (
    <BaseLayout pageTitle={t('pageTitle')}>
      <section id="contact" className="center-elements mb-5">
        <div className="d-flex flex-wrap pt-5 pb-4">
          <Container className="row d-flex justify-content-center">
            <div className="col-11 text-center">
              <h2>{t('section.heading')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('section.instruction') }} />
            </div>
            <div className="col-11 d-flex justify-content-center align-items-center">
              <div className="contact-form-wrapper w-100 p-2 p-md-4">
                <Form onSubmit={handleSubmit(sendMessage)}>
                  <div className=" col-md-12 d-flex flex-wrap justify-content-between">
                    <div className="col-md-6" id="contact-form-name">
                      <FormInput
                        type="text"
                        name="fullName"
                        useMargin={false}
                        containerClass="my-2"
                        registerFunc={register}
                        placeholder={t('form.placeholder.name')}
                        errorMsg={errors.fullName?.message}
                      />
                    </div>
                    <div className="col-md-6" id="contact-form-email">
                      <FormInput
                        id="email"
                        type="email"
                        name="email"
                        containerClass="my-2"
                        useMargin={false}
                        registerFunc={register}
                        placeholder={t('form.placeholder.email')}
                        errorMsg={errors.email?.message}
                      />
                    </div>
                  </div>
                  <FormInput
                    id="subject"
                    type="text"
                    name="subject"
                    containerClass="my-2"
                    useMargin={false}
                    registerFunc={register}
                    placeholder={t('form.placeholder.subject')}
                    errorMsg={errors.subject?.message}
                  />
                  <div id="contact-form-message" className="p-3 form-group">
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
