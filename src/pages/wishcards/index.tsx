import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BaseLayout from '@/components/layout/BaseLayout';
import Card from '@/components/wishcard/Card/Card';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'mission']))
    }
  };
}

const mockCards = [
  {
    name: 'Katy',
    item: 'crayons',
    price: 25,
    interest: 'skating',
    location: 'somewhere'
  }
];

export default function Index(): JSX.Element {
  return (
    <BaseLayout pageTitle="Wishcards">
      Wishcards Page
      <div className="row">
        <div className="grid grid-cols-3 gap-4">
          <Card cardInfo={mockCards[0]} />
          <Card cardInfo={mockCards[0]} />
          <Card cardInfo={mockCards[0]} />
          <Card cardInfo={mockCards[0]} />
        </div>
      </div>
    </BaseLayout>
  );
}
