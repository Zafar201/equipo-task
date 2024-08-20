import screen from '../src/images/screen.png'
import kfc from '../src/images/kfc.png'
import mcd from '../src/images/mcd.png'
import pizza from '../src/images/pizza.png'
import jco from '../src/images/j-co.png'
import starbucks from '../src/images/starbucks.png'
import burger from '../src/images/burger.png'

export const slides = [
    {
      id: 1,
      text: "Deliver a better customer experience and increase their operational efficiency.",
      author: "Patrick Fernandes",
      position: "CEO at Burger King",
    },
    {
      id: 2,
      text: "Enhance your service quality and boost customer satisfaction.",
      author: "Jane Doe",
      position: "CMO at Starbucks",
    },
    {
      id: 3,
      text: "Streamline your operations for maximum efficiency.",
      author: "John Smith",
      position: "CTO at McDonald's",
    },
  ];


  export const menu =[{
    title:'Home',
    path:'/'
  },
  {
    title:'Features',
    path:'/feature'
  },
  {
    title:'Pricing',
    path:'/price'
  },
  {
    title:'Blog',
    path:'/blog'
  },
  {
    title:'Resource',
    path:'/resource'
  },
]
export const brandLogos = [
  { name: 'KFC', src: kfc},
  { name: 'Pizza Hut', src: pizza},
  { name: 'McDonald\'s', src: mcd },
  { name: 'Starbucks', src: starbucks},
  { name: 'Burger King', src: burger },
  { name: 'J.Co', src: jco },
];

export const features = [
  "Unlimited Transactions",
  "Multi Outlet",
  "Report Featured",
  "Inventory Management",
  "Direct report & teamreview",
  "Employee Management System",
  "CRM And Promotion Features",
  "Third Party Application Integration"
];

export const plans = [
  {
    name: 'Basic',
    monthlyPrice: 20,
    yearlyPrice: 200,
    color: 'bg-[#F1FAEB]',
  },
  {
    name: 'Business',
    monthlyPrice: 30,
    yearlyPrice: 300,
    color: 'bg-[#ECF6FF]',
    bestChoice: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 50,
    yearlyPrice: 500,
    color: 'bg-[#F2ECFF]',
  }
];

export const featureAvailability = [
  [true, true, true],
  [true, true, true],
  [true, true, true],
  [true, true, true],
  [true, true, true],
  [false, true, true],
  [false, false, true],
  [false, false, true]
];

export const faqData = [
  {
    question: "What are the common features in the Coca POS system?",
    answer: "Common features in a POS system include order management, payment integration, stock management, sales reporting, data analysis, table management (in restaurants), and customer support.",
    category: "general"
  },
  {
    question: "How does Coca POS help in managing stock?",
    answer: "Coca POS helps manage stock by tracking inventory levels, alerting low stock, and generating reports.",
    category: "general"
  },
  {
    question: "Can the Coca POS application be integrated with other systems?",
    answer: "Yes, Coca POS can be integrated with various third-party systems and tools.",
    category: "general"
  },
  {
    question: "What is the average cost to purchase and implement a Coca POS?",
    answer: "The cost varies based on business size and needs. Contact for a quote.",
    category: "payment"
  },
  {
    question: "What is the average cost to purchase and implement a Coca POS?",
    answer: "The cost varies based on business size and needs. Contact for a quote.",
    category: "payment"
  },
  {
    question: "What is the average cost to purchase and implement a Coca POS?",
    answer: "The cost varies based on business size and needs. Contact for a quote.",
    category: "payment"
  },
  {
    question: "What about customer data security?",
    answer: "Coca POS prioritizes data security with encryption and compliance measures.",
    category: "others"
  },
  {
    question: "What about customer data security?",
    answer: "Coca POS prioritizes data security with encryption and compliance measures.",
    category: "others"
  },
  {
    question: "What about customer data security?",
    answer: "Coca POS prioritizes data security with encryption and compliance measures.",
    category: "others"
  },
  {
    question: "How are transactions processed in Coca POS?",
    answer: "Transactions are processed securely in real-time, with options for various payment methods.",
    category: "transactions"
  },
  {
    question: "How are transactions processed in Coca POS?",
    answer: "Transactions are processed securely in real-time, with options for various payment methods.",
    category: "transactions"
  },
  {
    question: "How are transactions processed in Coca POS?",
    answer: "Transactions are processed securely in real-time, with options for various payment methods.",
    category: "transactions"
  },
];


export const featuresList = [
  {
    title: "Dashboard to monitor your business sales from anywhere",
    description: "Dashboard provides in-depth insight into the performance menu items. You can see popular and unsold menus, helping you to monitor your restaurant business sales.",
    image:screen,
  },
  {
    title: "Easier and better Desk Management",
    description: "Desk management becomes smoother with interactive table visualizations. You can manage orders, allocate tables and maximize restaurant capacity.",
    image:screen,
  },
  {
      title: "More efficient customer recording and monitoring",
      description: "Monitor order records to tailor orders to customer preferences, such as options to add or remove ingredients for a more personalized experience and better service.",
      image:screen, 
  }
];



export const categories = ["general", "transactions", "payment", "others"];
