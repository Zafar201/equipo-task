import  { useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../../images/vector.png'

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };
  ////  m-0 mr-[32px] mb-[30px] ml-[32px] rounded-bl-[20px] rounded-br-[20px]//

  return (
    <section className='bg-white'>
    <footer className="bg-[#1B1B1E] text-white py-12 footer-div
    
     ">
    <div className="container mx-auto px-4">
      <div className="mb-12">
        <h2 className="mb-4 font-[Poppins] text-[3.4rem] font-medium leading-[64px] tracking-[-0.02em] text-left text-white w-[34rem]">
          Dont Miss This Exclusive Opportunity
        </h2>
        <div className="relative mt-4 w-full flex flex-col md:flex-row">
          <p className="mb-6 font-[Poppins] text-[1.3rem] font-normal text-[#C2C2C2] text-left w-full md:w-[36rem] leading-[24px]">
            Enter your email address and start connecting with a better business world using our POS products.
          </p>
          <div className="flex justify-end w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800 focus:outline-none max-w-[409px] right-0 absolute p-[23px] rounded-[58px]"
              required
            />
            <button
            onClick={handleSubmit}
              type="submit"
              className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-[#FF5C00] text-white rounded-full px-6 py-2 font-semibold hover:bg-orange-600 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>
  
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
        <div className="flex items-center mb-4 md:mb-0">
        
            <img src={logo} alt="" />
          <span className="text-xl font-bold ml-2">Coca</span>
        </div>
  
        <nav className="mb-4 md:mb-0 order-1 md:order-none">
          <ul className="flex flex-wrap justify-center md:justify-start">
            {['Features', 'Pricing', 'Blog', 'Resource', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
              <li key={item} className="mr-6 mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
  
        <div className="order-2 md:order-none">
          <p className="text-gray-400 mb-4">© 2023 Coca, Inc. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </section>
  
  );
};

export default Footer;