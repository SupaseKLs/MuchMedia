"use client"; // บอกให้ Next.js รู้ว่านี่คือ Client Component
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // นำเข้า AnimatePresence สำหรับควบคุมการ exit

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="md:w-11/12 mx-auto">
      <div className="font-sans text-gray-800 p-6 mx-auto rounded-lg bg-transparent">
        <h1 className="text-xl font-bold text-left mb-5">FAQS</h1>
        <h1 className="text-5xl md:text-6xl font-bold text-left mb-5">Frequently Asked Questions</h1>
        <div className="border-t border-gray-300">
          {faqData.map((faq, index) => (
            <div key={index} className="py-4 border-b border-gray-300">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-4xl font-bold text-gray-400 mr-4">{`0${index + 1}.`}</span>
                <p className="flex-grow text-2xl font-bold text-black">{faq.question}</p>
                <button className="bg-black text-white rounded-full py-2 px-8 md:px-10 text-3xl cursor-pointer">
                  {openQuestion === index ? '-' : '+'}
                </button>
              </div>

              {/* ใช้ AnimatePresence เพื่อควบคุมการออก (exit) */}
              <AnimatePresence initial={false}>
                {openQuestion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} // กำหนดการ exit
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 text-xl text-gray-500">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  { question: 'What services does Much Media offer?', answer: 'We offer a variety of media solutions including design, development, and marketing.' },
  { question: 'Do you offer custom designs?', answer: 'Yes, we provide tailored designs to meet your unique needs.' },
  { question: 'Can I see samples of your previous work?', answer: 'Of course! Visit our portfolio to see examples of our work.' },
  { question: 'Do you provide ongoing support after project completion?', answer: 'Yes, we offer maintenance and support services post-project.' },
  { question: 'How can I get in touch with Much Media?', answer: 'You can easily reach us directly via email for any inquiries or connect with us through our social media channels. We look forward to hearing from you and discussing how we can assist you with your creative needs!.' },
];

export default FAQSection;
