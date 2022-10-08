import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    // Esta función sirve para capturar los cambios en el input
    const inputChange = ({ target }) =>{
        setInputValue (target.value);
    }
    // esta función recibe como parámetro el evento del input del form
    const onSubmit = (e)=>{
        e.preventDefault();
        if ( inputValue.trim().length <=1) return;
        onNewCategory( inputValue.trim() ); 
        //setCategories( categories => [inputValue, ...categories]);
        setInputValue('');
    }

  return (
    <form onSubmit={ (e) => onSubmit(e)}>
        <input type="text"
        placeholder="Buscar Gifts"
        value={ inputValue }
        onChange={ inputChange }/>
    </form>
  )
}
