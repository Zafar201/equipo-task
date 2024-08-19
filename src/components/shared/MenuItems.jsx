import PropTypes from 'prop-types';
import  { Fragment } from 'react';
import { Link } from 'react-router-dom'; 

function MenuItems({ menu, setNavActive, navActive }) {
  return (
    <Fragment>
      {menu.map((nav, i) => (
        <Link to={nav.path} key={i}>
          <li onClick={() => setNavActive(nav.path)}
            className={`${navActive === nav.path ? 'rounded-[100px] bg-[#19191C] text-white' : 'text-[#232124] font-medium text-base leading-6'}`}
            key={i}
          >
            <a>{nav.title}</a>
          </li>
        </Link>
      ))}
    </Fragment>
  );
}

MenuItems.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  setNavActive: PropTypes.func.isRequired,
  navActive: PropTypes.string.isRequired,
};

export default MenuItems;
