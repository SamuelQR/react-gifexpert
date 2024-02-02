import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );


    const getImages = async() => {
      const newImages = await getGifs( category );
      setImages(newImages);
      setIsLoading(false);
    }
  
    useEffect( () => {
      getImages();
    }, [])

    return{
        images, //Si hay una propiedad que apunta a una variable con ese nombre, se puede dejar una vez
        isLoading
    }
}
//Un hook es una funcion que retorna algo, en este caso retorna un obj