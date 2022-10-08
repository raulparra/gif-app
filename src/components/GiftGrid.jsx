import { GiftItem } from './GiftItem';
import { useFetchGifts } from "../hooks/useFetchGifts";

//Constante que almacena funcion para obtener gifts
export const GiftGrid = ( { category }) => {

        const { images, isLoading } = useFetchGifts ( category )
   /*  const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifts( category );
        setImages( newImages)
        
    }

    useEffect(() => {
      getImages( category );
    
    }, []) */
    

  return (
    <>
        <h3>{ category }</h3>

        {
          isLoading && ( <h2>Cargando...</h2> )
        }

            <div className="card-grid">
                {
                    images.map( (image) =>(
                        <GiftItem key={ image.id }  {...image}/>
                    ))
                }
            </div>
        
       
    </>
  )
}
