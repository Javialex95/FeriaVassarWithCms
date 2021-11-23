import React from 'react';
import { Accordion } from 'react-accessible-accordion';
import { HomeFooter } from '../Home/Footer';
import { faqs } from './faqs';
import { Item } from './Item';

export const Faq = () => {

    return (
        <>
            <section className="faq">
                <div className="faq_bg"></div>
                <div className="faq_title">
                    <div className="small-title">
                        PREGUNTAS FRECUENTES
                    </div>
                    <div className="title">
                        FAQ
                    </div>
                </div>
                <div className="faq_content">
                    <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
                        {
                            faqs.map((item, index) => {
                                return (
                                    <Item item={item} />
                                );
                            })
                        }
                    </Accordion>
                </div>
            </section>
            
            <HomeFooter />
        </>
    )
}
