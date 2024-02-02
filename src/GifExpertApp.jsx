import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([  'One Punch' ]);

    //console.log(categories);

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory)) return; //Valida que no hayan valores repetidos
        //console.log(newCategory);
        setCategories([newCategory, ...categories]);
        //setCategories( cat => [...cat, newCategory]);
    }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
        // setCategories={setCategories}
        onNewCategory = { event => onAddCategory(event) }
        />


        { 
            categories.map( category => ( //Map barre cada uno de los elementos del arreglo
                    <GifGrid 
                    key = {category}
                    category={category} />
            )) 
        }


        {/* Gif Item */}
    </>
  )
}
