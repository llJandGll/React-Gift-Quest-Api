import { useState } from "react"


// *imports
import { InputSearch } from "./components/Input-Search"
import { GiftGrid } from "./components/Gift-Grid"
import { DeleteCategory } from "./components/delete-Category"


export const GiftApp = () => {

    const [giftCategory, setGiftCategory] = useState([
        "box"
    ])




  return (
    <>

        {
          <InputSearch giftCategory={ giftCategory } setGiftCategory={ setGiftCategory }/>
        }

        {
            giftCategory.map(( category, index) => 
              (<div key={ category }>

                <h1 > { category }</h1>
                <DeleteCategory index={ index} giftCategory={ giftCategory} setGiftCategory={ setGiftCategory }/>

                <GiftGrid 
                  key={ category } 
                  index = { index } 
                  giftCategory = { giftCategory }
                  setGiftCategory = { setGiftCategory }
                  category = { category }
                  />
                </div>
              )
            )
        }

    </>
  )
}
