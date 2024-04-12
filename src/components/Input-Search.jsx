import PropTypes from 'prop-types'
import { useState } from 'react'


export const InputSearch = ( { giftCategory , setGiftCategory}) => {


  const [boxInput, setBoxInput] = useState("");

  const [message, setMessage] = useState("");


  const onSubmitData = ( event ) => {

    event.preventDefault();
    
    if (boxInput.length <= 0  ) {
      return;
    }

    const clearInput = boxInput.trim();

    if (giftCategory.includes(clearInput)) {
      setMessage("Ya existe")

      setTimeout(() => {
        setMessage("")
      }, 1500);
      return;
    }else{
      setMessage("guardado exitosamente")
      setTimeout(() => {
        setMessage("")
      }, 1500);
    }

    setGiftCategory([ clearInput , ...giftCategory]);

    setBoxInput("");

  };


  const onChangeBoxInput = (  {target : { value }} ) => {
    
    setBoxInput( value );
  };

  const clearWindows = () => {
    
    window.location.reload();
  };


  

  return (

    <form action="" onSubmit={ onSubmitData }>
      <input 
        type="text" 
        value={ boxInput }
        onChange={ onChangeBoxInput }
      />
      <span> { message }</span>
      <button 
        disabled = { boxInput.trim().length <= 0  } 

      >Enviar</button>
      <button onClick={ clearWindows }>Reset</button>
    </form>
  )
}

InputSearch.propTypes = {
  giftCategory : PropTypes.array,
  setGiftCategory : PropTypes.func
}


