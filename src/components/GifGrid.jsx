import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs(category) //desestricturamos un obj

  return (
    <>
        <h3>{ category }</h3>

        {
        isLoading && (<h2>Cargando...</h2>)
        }

        <div className="card-grid">
          {
            images.map( ( image ) =>(
              <GifItem 
                key={image.id}
                {...image}//Todas las propiedades que vengan en el image, las estoy esparciendo en el GifItem
              />
            ))
          }
        </div> 
    </>
  )
}

