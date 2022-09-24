import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import BaseLayout from '@/components/layout/BaseLayout';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'howTo']))
    }
  };
}

export default function Howto(): JSX.Element {
  const { t } = useTranslation('howTo');
  return (
    <BaseLayout pageTitle={t('pageTitle')}>
      <header>
        <div className="bg-cover">
          <div className="d-flex flex-column align-items-center justify-content-center p-4">
            <h1 className="mt-4">{t('header.title')}</h1>
            <div className="d-flex gap-3">
              <a className="mt-4 btn-howto" type="button" href="#donor">
                {t('header.donors')}
              </a>
              <h2 className="align-self-center mt-3">&</h2>
              <a className="mt-4 btn-howto" type="button" href="#partner">
                {t('header.partners')}
              </a>
            </div>
          </div>
        </div>
      </header>
      <section id="donor" className="pt-2">
        <div className="pt-2 d-flex flex-column container-md">
          <h2 className="text-center pt-5">{t('donor.header')}</h2>
          <div className="card-container">
            <div className="text-card">
              <h3>{t('donor.steps.1.header')}</h3>
              <p className="heading-step">{t('donor.steps.1.headingStep')}</p>
              <p className="body-step" dangerouslySetInnerHTML={{ __html: t('donor.steps.1.bodyStep') }} />
            </div>
            <div className="image-card">
              <img
                className="img-fluid"
                alt="select the wishcard to donate a gift"
                src={`/assets/img/${t('donor.steps.1.image')}`}
              />
            </div>
          </div>
          <div className="card-container">
            <div className="image-card">
              <img className="img-fluid" alt="how to check out" src={`/assets/img/${t('donor.steps.2.image')}`} />
            </div>
            <div className="text-card">
              <h3>{t('donor.steps.1.header')}</h3>
              <p className="heading-step">{t('donor.steps.2.headingStep')}</p>
              <p className="body-step" dangerouslySetInnerHTML={{ __html: t('donor.steps.2.bodyStep') }} />
            </div>
          </div>
          <div className="card-container">
            <div className="text-card">
              <h3>{t('donor.steps.3.header')}</h3>
              <p className="heading-step">{t('donor.steps.3.headingstep')}</p>
              <p className="body-step" dangerouslySetInnerHTML={{ __html: t('donor.steps.3.bodyStep') }} />
            </div>
            <div className="image-card">
              <img
                className="img-fluid"
                alt="select the wishcard to donate a gift"
                src={`/assets/img/${t('donor.steps.3.image')}`}
              />
            </div>
          </div>
          <div className="card-container">
            <div className="text-center">
              <h2>{t('donor.closing.header')}</h2>
              <Link href="/wishcards">
                <button className="mt-4 btn-start">{t('donor.closing.button')}</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="partner" className="pt-2 pb-5">
        <div className="pt-2 d-flex flex-column container-md">
          <div className="pt-5">
            <h2 className="text-center">{t('partner.header')}</h2>
          </div>
          <div className="card-container">
            <div className="text-card">
              <h3>{t('partner.steps.1.header')}</h3>
              <p className="heading-step">{t('partner.steps.1.headingStep')}</p>
              <p className="body-step" dangerouslySetInnerHTML={{ __html: t('partner.steps.1.bodyStep') }} />
            </div>
            <div className="image-card">
              <img
                className="img-fluid"
                alt="select the wishcard to donate a gift"
                src={`/assets/img/${t('partner.steps.1.image')}`}
              />
            </div>
          </div>
          <div className="card-container">
            <div className="text-card">
              <h3>{t('partner.steps.2.header')}</h3>
              <p className="heading-step">{t('partner.steps.2.headingStep')}</p>
              <p className="body-step" dangerouslySetInnerHTML={{ __html: t('partner.steps.2.bodyStep') }} />
            </div>
            <div className="text-card">
              <h3>{t('partner.steps.3.header')}</h3>
              <p className="heading-step">{t('partner.steps.3.headingStep')}</p>
              <p className="body-step" dangerouslySetInnerHTML={{ __html: t('partner.steps.3.bodyStep') }} />
            </div>
          </div>
          <div className="card-container">
            <div className="image-card">
              <img
                className="img-fluid"
                alt="select the wishcard to donate a gift"
                src={`/assets/img/${t('partner.steps.4.image')}`}
              />
            </div>
            <div className="text-card">
              <h3>{t('partner.steps.4.header')}</h3>
              <p className="heading-step">{t('partner.steps.4.headingStep')}</p>
              <p className="body-step" dangerouslySetInnerHTML={{ __html: t('partner.steps.4.bodyStep') }} />
            </div>
          </div>
          <div className="card-container">
            <div className="text-center">
              <h2>{t('partner.closing.header')}</h2>
              <Link href="/signup">
                <button className="mt-4 btn-start">{t('partner.closing.button')}</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
