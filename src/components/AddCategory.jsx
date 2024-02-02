import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')    

    const onInputChange = ({target}) => { //(event)
        setInputValue(target.value); //(event.target.value) es otra forma
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue, ...categories]) //Esto es un callBack
        setInputValue('');
        onNewCategory( inputValue.trim() );
        
    }
    return (
        <form onSubmit={ onSubmit }> 
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }  
                onChange={onInputChange} //argumento (e) que se lo puede mandar a la funcion onInputChange, este es el llamado a la funcion, (envent) => onInputChange(event)
            /> 
        </form>
    )
}

//onsubmit  = event => onSubmit (event) (este es la funcion) en el <form></form>
