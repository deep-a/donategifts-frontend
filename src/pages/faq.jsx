import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useTranslation } from 'next-i18next';
import BaseLayout from '@components/layout/BaseLayout';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'faq']))
    }
  };
}

export default function Faq() {
  const { t } = useTranslation('faq');

  const questions = t('questions', { returnObjects: true });

  return (
    <BaseLayout pageTitle={t('pageTitle')}>
      <div className="d-flex justify-content-center text-center w-100">
        <div className="my-4">
          <h1 className="mb-3 mt-5">{t('heading')}</h1>
          <div className="py-4">
            <Accordion>
              {questions.map((item, index) => (
                <Accordion.Item eventKey={String(index)} key={`${item.header.slice(0, 10) + index}`}>
                  <Accordion.Header>
                    <span>{item.header}</span>
                  </Accordion.Header>
                  <Accordion.Body className="d-flex justify-content-center text-start">
                    <div className="mx-auto">
                      {Array.isArray(item.content) ? (
                        item.content.map((paragraph, _index) => (
                          <p
                            key={`${paragraph.slice(0, 10) + _index}`}
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                          />
                        ))
                      ) : (
                        <span dangerouslySetInnerHTML={{ __html: item.content }} />
                      )}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
