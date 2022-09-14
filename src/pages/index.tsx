import React from 'react';
import Link from 'next/link';
// import useTypingEffect from '../hooks/useTypingEffect';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BaseLayout from '@/components/layout/BaseLayout';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'mission'])),
    },
  };
}

export default function Index(): JSX.Element {
  // const { title } = useTypingEffect('Foster Children',
  //   'Homeless Youth',
  //   'Kids in Emergency Shelters', 130, 20);

  // let txt = '';
  // let typeSpeed = 180;

  // const typeEffect = () => {
  //   let wordIndex = 0;
  //   let isDeleting = false;
  //   while (wordIndex < words.length) {
  //     const fullText = words[wordIndex];
  //     if (isDeleting) {
  //       txt = fullText.substring(0, txt.length - 1);
  //     } else {
  //       txt = fullText.substring(0, txt.length + 1);
  //     }
  //     console.log({ txt, fullText, wordIndex });
  //     document.getElementById("typing").innerHTML = `<span>${txt}</span>`;
  //     if (isDeleting) {
  //       typeSpeed /= 2;
  //     }
  //     if (!isDeleting && txt === fullText) {
  //       typeSpeed = 2000;
  //       isDeleting = true;
  //     } else if (isDeleting && txt.length === 0) {
  //       isDeleting = false;
  //       wordIndex++;
  //       typeSpeed = 350;
  //     }
  //   }
  // };

  return (
    <BaseLayout pageTitle="Donate Gifts | School Supply Donation, Holiday Gift Donation, Virtual Toy Drive For Foster Care And Children In Crisis">
      <div className="hero flex-center" id="home-bg">
        <div className="grid auto-rows-auto">
          <div className="auto-cols-auto">
            <h1>
              Send Gifts to <span className="typing" id="typing"></span>
            </h1>
            <h4 className="hide">Every child should feel valued and loved</h4>
            <h4 className="m-mobile">Donate holiday gifts and school supplies to kids in need
            </h4>
            <div className="my-6">
              <Link href="/howto"><button className="btn-white-navy-lg">How It Works</button></Link>
              <Link href="/wishcards"><button className="btn-orange-navy-lg">See Wish Cards</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="wishcards">
        <h1>Become Our Secret Santa</h1>
      </div>
      <div className="wishcards">
        <h1>Donate School Supplies</h1>
      </div>
    </BaseLayout>
  );
}
