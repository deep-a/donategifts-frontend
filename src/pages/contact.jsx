import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BaseLayout from '@components/layout/BaseLayout';
import { useForm } from 'react-hook-form';
import { contactResolver } from "@common/helper/FormHelper";
import { Container, Form } from "react-bootstrap";
import FormInput from "@components/authentication/FormInput";
import Link from "next/link";

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
      <section id="contact" className="center-elements mb-5">
        <div className="d-flex flex-wrap pt-5 pb-4">
          <Container className="row d-flex justify-content-center">
            <div className="col-11 text-center">
              <h2 className="">Get in Touch</h2>
              <p>Please fill out form and we will be in touch as soon as possible.
                Perhaps your question has been answered, see our <Link href="/faq" className="link-faq">FAQ</Link> page.</p>
            </div>
            <div className="col-11 d-flex justify-content-center align-items-center">
              <div className="contact-form-wrapper">
                <Form>
                  <div className=" col-md-12 d-flex flex-wrap justify-content-between">
                    <div className="col-md-6" id="contact-form-name">
                      <label htmlFor="name" className="contact-label">Name</label>
                      <FormInput
                        type="text"
                        name="name"
                        registerFunc={register}
                        placeholder="Name:"
                        errorMsg={errors.fullName?.message}
                      />
                    </div>
                    <div className="col-md-6" id="contact-form-email">
                        <label htmlFor="email" className="contact-label">Email</label>
                        <FormInput
                          id="email"
                          containerClass="mt-5"
                          type="email"
                          name="email"
                          registerFunc={register}
                          placeholder="Email:"
                          errorMsg={errors.email?.message}
                        />
                      </div>
                  </div>
                  <div className="mt-3">
                    <Form.Label htmlFor="subject" className="contact-label">Subject</Form.Label>
                    <FormInput
                      id="subject"
                      containerClass="mt-3"
                      type="text"
                      name="subject"
                      registerFunc={register}
                      placeholder="Subject:"
                      errorMsg={errors.subject?.message}
                    />
                  </div>
                  <div id="contact-form-message" className="p-3 form-group">
                    <label htmlFor="message" className="contact-label">Message</label>
                    <textarea
                      rows="5"
                      id="message"
                      className="form-control contact-form-message mt-3"
                      {...register('message')}
                      placeholder="Message:"
                      errorMsg={errors.message?.message}
                    />
                  </div>
                  <div className="center-elements pt-3">
                    <button type="submit" className="btn-navy-white-lg">
                      Send Message
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
