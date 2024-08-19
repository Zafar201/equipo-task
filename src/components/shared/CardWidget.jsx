import Badge from './Badge'; 
import PropTypes from 'prop-types'
const CardWidget = ({ backgroundColor, textColor, showBadge, badgeProps, children }) => {
  return (
    <div className={`h-[208px] mb-[23px] relative p-6 rounded-lg shadow flex-1 ${backgroundColor} ${textColor}`}>
      {showBadge && <Badge {...badgeProps} />}
      {children}
    </div>
  );
};


CardWidget.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    showBadge: PropTypes.bool,
    badgeProps: PropTypes.object,
    children: PropTypes.node,
  };
  


export default CardWidget;
