import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
// extended in globals.scss
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import 'react-accessible-accordion/dist/fancy-example.css';
import { v4 as uuidv4 } from 'uuid';
import BaseLayout from '@/components/layout/BaseLayout';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'mission'])),
    },
  };
}

export default function Faq(): JSX.Element {
  const faqItems: {
    key: string;
    header: string;
    content: string | string[];
  }[] = [
    {
      key: uuidv4(),
      header:
        'Is my organization required to make a wish card for each and every child or is there a way I can do one big wish card with all of the children that we manage?',
      content: 'Unfortunately, we don&apos;t support the bulk creation feature yet.',
    },
    {
      key: uuidv4(),
      header: 'Are you charging any fees for the agency partners?',
      content: 'No, we do not charge anything.',
    },
    {
      key: uuidv4(),
      header: 'How do I get started? Our agency is interested in becoming a partner.',
      content: [
        'The first step that&apos;s required of you is to register your agency on our website: https://donate-gifts.com',
        'It will ask you to sign up as a foster care partner and there&apos;s a simple form with just 4 fields that need to be filled out for verification.',
        'Once that&apos;s done, we will review and verify your agency account & you can start listing the kids&apos; wishes right on our site.',
      ],
    },
    {
      key: uuidv4(),
      header: 'Is there a recommended price range for the wish items?',
      content:
        'We limit wish items to be under $30 each to ensure that all kids get a chance to get their gifts donated.',
    },
    {
      key: uuidv4(),
      header: 'Should let the kids know that if we sign up, they might not receive a gift, correct?',
      content:
        'There is a small chance that some of them might not receive the gift, but we are working very hard to make sure all kids get their wish items by Christmas.',
    },
    {
      key: uuidv4(),
      header: 'As a partner, do I put their requests in or do the foster students themselves?',
      content: [
        'Choosing each wish item may be up to you, or you could gather information from your kids (i.e. what item do they want for Christmas).',
        'We do offer a pre-selected list of gift items that you can click and choose from.',
        'However, only you or your agency staff members can post the wishcards on the kids&apos; behalf due to our security policies.',
      ],
    },
    {
      key: uuidv4(),
      header: 'What is the age range of children you will accept on the website?',
      content: 'We donate to any foster or homeless youth under 21 years old. (from 0 to 21 years old)',
    },
    {
      key: uuidv4(),
      header: 'Will we be able to receive reports of donors, so we can properly thank them?',
      content: [
        'This is currently under development and the feature is projected to be released soon.',
        'Each agency will have its own "profile" page that will show all wishes from the kids under their care.',
        'You will be able to share the page and send your supporters to donate directly to your kids.',
      ],
    },
    {
      key: uuidv4(),
      header:
        'Does each partner have its own page people can access? So that we could send donors to a page that shows all of our children specifically?',
      content: [
        'This is currently under development and the feature is projected to be released soon.',
        'Each agency will have its own "profile" page that will show all wishes from the kids under their care.',
        'You will be able to share the page and send your supporters to donate directly to your kids.',
        'Right now, we only post the wishes collectively in one page on <a href="/wishcards" class="underline">wishcards</a>.',
      ],
    },
  ];

  return (
    <BaseLayout pageTitle="FAQ Page">
      <div className="faq d-flex justify-content-center text-center w-100">
        <div className="mb-4 mt-4 pb-4">
          <h1 className="mb-3 pt-5">Frequently Asked Questions</h1>
          <div className="bg-white w-70 mx-auto py-4">
            <Accordion className="mt-4 w-100" allowZeroExpanded>
              {faqItems.map((item) => (
                <AccordionItem key={item.key}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordion-btn">
                      <span>{item.header}</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="accordion-panel">
                    {Array.isArray(item.content) ? (
                      item.content.map((paragraph) => (
                        <p key={uuidv4()} dangerouslySetInnerHTML={{ __html: paragraph }} />
                      ))
                    ) : (
                      <p dangerouslySetInnerHTML={{ __html: item.content }} />
                    )}
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
