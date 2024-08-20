import PropTypes from 'prop-types';


function Badge({ imgSrc, imgAlt, imgBackgroundColor, divBackgroundColor, textColor ,text,width}) {
  return (
     <div className={`badge badge-info gap-2 flex ${width} justify-around pt-[21px] pr-[27px] pb-[21px] pl-[17px] ${divBackgroundColor} text-[16px] font-medium`}>
    <img className={`p-1.5 rounded-full h-[29px] ${imgBackgroundColor}`} src={imgSrc} alt={imgAlt} />
    <span className={`${textColor}`}>{text}</span>
  </div>
  )
}

Badge.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    imgBackgroundColor: PropTypes.string,
    divBackgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    text: PropTypes.string.isRequired,
    width:PropTypes.string,
  };
  


export default Badge