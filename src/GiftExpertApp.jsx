import { useState } from "react"; //importar useState
import { AddCategory } from "./components/AddCategory"; // importar el segundo componente
import { GiftGrid } from "./components/GiftGrid";

export const GiftExpertApp = () => {

    //Establezco el useState de la variable categories de tipo array
    const [categories, setCategories] = useState([]);

    const addCategory = ( e ) => {
      if( categories.includes( e )) return;
      setCategories([ e, ...categories ]);
      //setCategories ([...categories, 'Valorant']);
    }

    

  return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory 
          onNewCategory = { e => addCategory(e)}
        />

        {// utilizar map para crear los elementos del array en el html.
            categories.map( category => (
                <GiftGrid key={ category } category={ category }/>
            ))
        }
        
    </>
  )
}
