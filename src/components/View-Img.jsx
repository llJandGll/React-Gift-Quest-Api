import PropTypes from 'prop-types'
export const ViewImages = ( { title, url}) => {
  return (
    <div className='card'>
        
        <p> { title }</p>
        <img src={ url } alt="" />
    </div>
  )
}

ViewImages.propTypes = {
    title : PropTypes.string,
    url : PropTypes.string
}
