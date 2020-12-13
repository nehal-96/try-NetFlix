import React from "react";
import { FAQs } from '../components';
import {HomeBox} from '../components';
import faqs from "../fixtures/faqs";

export function FAQsContainer() {
  return (
    <FAQs>
      <FAQs.Title>Frequently Asked Questions</FAQs.Title>
      <FAQs.Accordion>
        {faqs.map((item) => (
            <FAQs.Item key={item.id}>
            <FAQs.ItemT>
              {item.header}
            </FAQs.ItemT>
            <FAQs.ItemP>
            {item.body}
            </FAQs.ItemP>
          </FAQs.Item>
        )
        )}
      </FAQs.Accordion>
      <HomeBox />
    </FAQs>
  );
}