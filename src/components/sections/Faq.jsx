import  { useState } from 'react';
import PropTypes from 'prop-types';
import { Search } from 'lucide-react';
import { faqData } from '../../contants';

// eslint-disable-next-line react/display-name
const FAQItem = (({ question, answer, isOpen, toggleOpen, index }) => {
  return (
    <div className="collapse collapse-plus bg-base-200 mb-2 bg-transparent border-b border-b-[#E4E4E4] rounded-none">
      <input
        type="radio"
        name="my-accordion-faq"
        checked={isOpen}
        onChange={() => toggleOpen(index)}
        className={` ${isOpen ? 'text-[#FF5C00]' : 'text-[#19191C]'}`}
      />
      <div className={`collapse-title text-xl font-medium ${isOpen ? 'opend' : 'closed'}`}>{question}</div>
      <div className="collapse-content">
        <p className='text-[#4D4E57]'>{answer}</p>
      </div>
    </div>
  );
});

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("general");

  const toggleOpen = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const filteredFAQs = faqData.filter(
    (faq) =>
      (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (activeCategory === "all" || faq.category === activeCategory)
  );

  const categories = ["general", "transactions", "payment", "others"];

  return (
    <div className='bg-white mt-[70px] mb-[70px]'>
      <div className="faq max-w-[80%] mx-auto bg-[#F8F9FD] text-gray-200 p-[120px_108px] gap-[10px] rounded-[32px] mb-[38px] min-h-[65vh]">
        <div className="flex justify-between items-center mb-8 faq-heading">
          <h1 className="text-[64px] font-medium text-[#19191C] w-[44%] leading-[77px]">Frequently Asked Questions</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Type your question here"
              className="w-[400px] h-[70px] text-[16px] bg-white border-none py-2 px-4 pr-12 rounded-full text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF5C00]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF5C00] text-white rounded-full p-2">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="flex mb-8 faq-list">
          <div className="w-1/4 category">
            {categories.map((category) => (
              <button
                key={category}
                className={`block text-left px-4 py-2 font-medium mb-2 p-[12px_48px_10px_48px] border-t border-l border-r border-[#FF5C00] rounded-full w-fit ${
                  activeCategory === category
                    ? "bg-white text-[#FF5C00] border border-solid border-[#FF5C00]"
                    : "text-black hover:bg-white hover:text-[#FF5C00] border-transparent"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="w-3/4 pl-8">
            {filteredFAQs.length > 0 ? filteredFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                toggleOpen={() => toggleOpen(index)}
                index={index}
              />
            )) : (
              <h1 style={{color:'red'}}>No related data</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Faq.propTypes = {
  searchQuery: PropTypes.string,
  activeCategory: PropTypes.string,
};

export default Faq;
