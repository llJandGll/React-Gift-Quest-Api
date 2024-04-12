import PropTypes from "prop-types"
import { useGiftImg } from "../hooks/useGiftImg"
import { ViewImages } from "./View-Img"
// * Hooks


export const GiftGrid = ({ category}) => {


    const {images, isLoading} = useGiftImg( category )
  return (
    <>
       
       
        {
            isLoading && <span> Cargando ... </span>
        }
        <div className="card-grid">
            {
                images.map( img => {
                    return <ViewImages key={ img.id } {...img}/>
                })
            }
        </div>
    </>
  )
}


GiftGrid.propTypes = {
    index : PropTypes.number,
    giftCategory : PropTypes.array,
    setGiftCategory : PropTypes.func,
    category : PropTypes.string
}