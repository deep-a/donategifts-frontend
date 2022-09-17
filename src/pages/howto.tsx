import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import useTranslation from 'next-i18next';
// not going to worry about the i18 stuff for right now
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import howToCheckOut from '../../public/assets/img/howto-checkout.svg';
import wishCardClick from '../../public/assets/img/wishcard-click.svg';
import howToGift from '../../public/assets/img/howto-gift.svg';
import registerImg from '../../public/assets/img/register.svg';
import notified from '../../public/assets/img/notified.svg';
import BaseLayout from '@/components/layout/BaseLayout';
import Btn from '@/components/common/Button';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'mission'])),
    },
  };
}

export default function Howto(): JSX.Element {
  // const { t } = useTranslation('common');
  // unused var warnings, so I commented this out
  return (
    <BaseLayout pageTitle="How does Donategifts work?">
      <header>
        <div className="w-full bg-cover bg-center dg-bg-howto">
          <div className="flex items-center justify-center h-full w-full">
            <div className="text-center font-cool">
              <h1 className="dg-color-blue text-4xl font-semibold">
                How Does It Work For
              </h1>
              <div className="text-3xl">
                <a href="#donor">
                  <Button className=" mt-4 font-cool mr-5" children="Donors" />
                </a>
                and
                <a href="#partner">
                  <Button className=" mt-4 ml-5" children="Partners" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="donor" className="relative pt-4 w-full dg-bg-yel-80">
        <div className="py-20">
          <h1 className="font-cool dg-color-blue text-center text-4xl">
            How do I send gifts as a donor?
          </h1>
        </div>
        <div className="items-center flex flex-wrap px-4">
          <div className="w-full md:w-5/12 mx-auto px-2 py-2">
            <div className="md:pr-12">
              <h3 className="text-3xl font-semibold text-white font-cool">
                Step 1
              </h3>
              <p className="mt-4 text-2xl font-quick dg-color-blue font-semibold">
                Choose a wish card to 'Donate Gift'
              </p>
              <p className="mt-4 text-lg font-quick dg-color-blue leading-relaxed">
                Each wish card is for a different foster child, created and
                managed by our certified foster agency partner. Browse the
                wishes and become a Secret Santa to make their wish come true.
              </p>
              <p className="mt-4 text-lg font-quick dg-color-blue leading-relaxed">
                Click the ‘Donate Gift’ button on the card or on their wish page
                to begin the donation process.
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/12 mx-auto">
            <Image
              alt="select the wishcard to donate a gift"
              className="max-w-full px-12"
              src={wishCardClick}
            />
          </div>
        </div>
        <div className="items-center flex flex-wrap px-4 mt-10 pt-24">
          <div className="w-full md:w-4/12 mx-auto">
            <Image
              alt="how to check out"
              className="max-w-full px-12"
              src={howToCheckOut}
            />
          </div>
          <div className="w-full md:w-5/12 mx-auto px-2 py-2">
            <div className="md:pr-12">
              <h3 className="text-3xl font-semibold text-white font-cool">
                Step 2
              </h3>
              <p className="mt-4 text-2xl font-quick dg-color-blue font-semibold">
                Wish donation secure checkout
              </p>
              <p className="mt-4 text-lg font-quick dg-color-blue leading-relaxed">
                Your payment transaction is powered by Stripe, which is audited
                by a PCI-certified auditor and is certified to PCI Service
                Provider Level 1. This is the most stringent level of
                certification available in the payments industry.
              </p>
              <p className="mt-4 text-lg font-quick dg-color-blue leading-relaxed">
                Simply enter the name on card, card number, expiration date, CVC
                (security code 3-4 digits), and the zipcode.
              </p>
              <p className="mt-4 text-lg font-quick dg-color-blue leading-relaxed">
                That's it! You will be notified after confirmed payment with the
                donation and shipping details.
              </p>
            </div>
          </div>
        </div>
        <div className="items-center flex flex-wrap px-4 pt-24 pb-18">
          <div className="w-full md:w-5/12 mx-auto px-2 py-2">
            <div className="md:pr-12">
              <h3 className="text-3xl font-semibold text-white font-cool">
                Step 3
              </h3>
              <p className="mt-4 text-2xl font-quick dg-color-blue font-semibold">
                Get 100% tax deductible receipt
              </p>
              <p className="mt-4 text-lg font-quick dg-color-blue leading-relaxed">
                After checkout, we will deliver the gift to each managing foster
                agency. All kids and youth are under our partner agencies' care
                and the agency staff will collect and distribute the shipped
                wish items.
              </p>
              <p className="mt-4 text-lg font-quick dg-color-blue leading-relaxed">
                We don't have a drop-off site because we handle all shipping
                orders to make the donation experience more easy and efficient
                for you.
              </p>
              <p className="mt-4 text-lg font-quick dg-color-blue leading-relaxed">
                You will receive a tax-exempt receipt, shipping details, and
                delivery proof in the confirmation email. If our partner agency
                permits, you will also get a thank you message and photos from
                the child.
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/12 mx-auto">
            <Image
              alt="select the wishcard to donate a gift"
              className="max-w-full px-12"
              src={howToGift}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <h1 className="font-cool dg-color-blue text-4xl">
                Ready to donate gifts?
              </h1>
              <Link href="/wishcards">
                <Btn
                  className=" mt-6 text-lg font-quick"
                  children="Start Browsing Wishes"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="partner" className="relative pt-4 w-full dg-bg-cream">
        <div className="py-20">
          <h1 className="font-cool dg-color-blue text-center text-4xl">
            How do I create wishes as a partner?
          </h1>
        </div>
        <div className="items-center flex flex-wrap px-4">
          <div className="w-full md:w-5/12 mx-auto px-2 py-2">
            <div className="md:pr-12">
              <h3 className="text-3xl font-semibold dg-color-yel font-cool">
                Step 1
              </h3>
              <p className="mt-4 text-2xl font-quick dg-color-blue font-semibold">
                Register as a partner
              </p>
              <p className="mt-4 text-lg font-quick dg-color-blue leading-relaxed">
                We accept partnerships with state-certified foster care
                organizations, adoption agencies, licensed domestic foster
                homes, and other 501(c)(3) non-profit organizations that help
                homeless youth and children at risk.
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/12 mx-auto">
            <Image
              alt="select the wishcard to donate a gift"
              className="max-w-full px-12"
              src={registerImg}
            />
          </div>
        </div>
        <div className="items-center flex flex-wrap px-4 mt-10 pt-24">
          <div className="w-full md:w-5/12 mx-auto px-2 py-2">
            <div className="md:pr-12">
              <h3 className="text-3xl font-semibold dg-color-yel font-cool">
                Step 2
              </h3>
              <p className="mt-4 text-2xl font-quick dg-color-blue font-semibold">
                Become verified
              </p>
              <p className="mt-4 text-lg font-quick dg-color-blue leading-relaxed">
                Agency verification may take up to 1-2 business days due to our
                security regulations. You will be notified once your agency
                account is verified.
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/12 mx-auto">
            <h3 className="text-3xl font-semibold dg-color-yel font-cool">
              Step 3
            </h3>
            <p className="mt-4 text-2xl font-quick dg-color-blue font-semibold">
              Create wish cards
            </p>
            <p className="mt-4 text-lg font-quick dg-color-blue leading-relaxed">
              Create wish cards by filling out a simple form. Choose wish items
              from our suggested list, or search and add the product link if the
              child wishes for a specific item. Your submission will be created
              as a draft and will be published after our review process.
            </p>
          </div>
        </div>
        <div className="items-center flex flex-wrap px-4 pt-24 pb-18">
          <div className="w-full md:w-5/12 mx-auto px-2 py-2">
            <div className="md:pr-12">
              <h3 className="text-3xl font-semibold dg-color-yel font-cool">
                Step 4
              </h3>
              <p className="mt-4 text-2xl font-quick dg-color-blue font-semibold">
                Get notified
              </p>
              <p className="mt-4 text-lg font-quick dg-color-blue leading-relaxed">
                That’s it! You will be notified when your wish cards are
                published, as well as when gifts are on their way. More
                questions? Check out the FAQs.
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/12 mx-auto">
            <Image
              alt="select the wishcard to donate a gift"
              className="max-w-full px-12"
              src={notified}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <h1 className="font-cool dg-color-blue text-4xl">
                Ready to become our non profit partner?
              </h1>
              <Link href="/signup">
                <Btn
                  className=" mt-6 text-lg font-quick"
                  children="Register Your Agency"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
