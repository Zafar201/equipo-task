import PropTypes from 'prop-types'
function PageBanner({title}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-4xl font-bold text-black">{title}</h1>
  </div>
  )
}


PageBanner.propTypes = {
  title: PropTypes.string,
};


export default PageBanner