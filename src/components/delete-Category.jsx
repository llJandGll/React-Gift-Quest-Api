
import PropTypes from 'prop-types'
export const DeleteCategory = ( {  index, giftCategory ,setGiftCategory }) => {

  const onDeleteCat = () => {
    // const deleteImg = giftCategory.filter(( value , indice) => {
    //   return indice != index
    // });

    // console.log(deleteImg)
    // setGiftCategory(deleteImg);

    const deleteImg = [...giftCategory]
    deleteImg.splice(index , 1);
    console.log(deleteImg) 
    setGiftCategory(deleteImg)
  };


  return (
    <>

      <div className="delete">
          <button onClick={ onDeleteCat }> Eliminar Categoría</button>
      </div>
    </>
  )
}


DeleteCategory.propTypes = {
  index: PropTypes.number,
  setGiftCategory : PropTypes.func,
  giftCategory : PropTypes.array
}
