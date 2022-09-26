import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BaseLayout from '@components/layout/BaseLayout';
import { useForm } from 'react-hook-form';
import { contactResolver } from "@common/helper/FormHelper";
import { Button, Form } from "react-bootstrap";
import { FormInput } from "@components/authentication/FormInput";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}

export default function Contact() {
  const {
    register,
    //handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: contactResolver
  });

  return (
    <BaseLayout pageTitle="Contact Donate Gifts">
      <section id="contact" className="mb-5">
        <div className="d-flex flex-wrap pt-5 pb-4">
          <div className="row d-flex">
            <div className="col-12 text-center">
              <h2 className="">Get in Touch</h2>
              <p>Please fill out form and we will be in touch as soon as possible.
                Perhaps your question has been answered, see our <a
                href="/faq">FAQ</a> page.</p>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center">
              <div className="contact-form-wrapper">
                <Form id="emailForm">
                  <div className="col-md-12 form-row d-flex flex-wrap justify-content-between">

                    <div className="col-md-6" id="contact-form-name">
                      <label htmlFor="name" className="contact-label">Name</label>
                      <FormInput
                        containerClass=""
                        type="text"
                        {...register('fullName')}
                        placeholder="Name:"
                        errorMsg={errors.fullName?.message}
                      />
                    </div>
                    <div className="col-md-6" id="contact-form-email">
                        <label htmlFor="email" className="contact-label">Email</label>
                        <FormInput
                          id="email"
                          containerClass=""
                          type="text"
                          {...register('email')}
                          placeholder="Email:"
                          errorMsg={errors.email?.message}
                        />
                      </div>
                  </div>
                  <div className="form-group">
                    <Form.Label htmlFor="subject" className="contact-label">Subject</Form.Label>
                    <FormInput
                      id="subject"
                      containerClass="mt-3"
                      type="text"
                      {...register('subject')}
                      placeholder="Subject:"
                      errorMsg={errors.subject?.message}
                    />
                  </div>
                  <div id="contact-form-message" className="form-group">
                    <label htmlFor="message" className="contact-label">Message</label>
                    <textarea
                      rows="5"
                      id="message"
                      className="form-control contact-form-message mt-3 mb-3"
                      {...register('message')}
                      placeholder="Message:"
                      errorMsg={errors.message?.message}
                    />
                  </div>
                  <div className="form-group text-center">
                    <Button className="my-3" type="submit">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
