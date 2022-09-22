import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
// extended in style.scss
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useTranslation } from 'next-i18next';
import BaseLayout from '@/components/layout/BaseLayout';

type Translations = { header: string; content: string | string[] }[];

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'faq']))
    }
  };
}

export default function Faq(): JSX.Element {
  const { t } = useTranslation('faq');

  const questions = t('questions', { returnObjects: true }) as Translations;

  return (
    <BaseLayout pageTitle="FAQ Page">
      <div className="d-flex justify-content-center text-center w-100">
        <div className="my-4">
          <h1 className="mb-3 mt-5">{t('heading')}</h1>
          <div className="py-4">
            <Accordion>
              {questions.map((item, index) => (
                <Accordion.Item eventKey={String(index)} key={item.header.slice(0, 10) + index}>
                  <Accordion.Header>
                    <span>{item.header}</span>
                  </Accordion.Header>
                  <Accordion.Body className="d-flex justify-content-center text-start">
                    <div className="mx-auto">
                      {Array.isArray(item.content) ? (
                        item.content.map((paragraph: string, _index: number) => (
                          <p key={paragraph.slice(0, 10) + _index} dangerouslySetInnerHTML={{ __html: paragraph }} />
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
