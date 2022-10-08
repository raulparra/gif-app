//constante que almacen la función de petción al api
export const getGifts = async ( category ) =>{

    const url = `http://api.giphy.com/v1/gifs/search?api_key=IUZr0r65v8T95H41Ho0G7AyX670j8JeM&q=${ category }&limit=20`;
    // Se hace la petición http
    const resp = await fetch( url )

    const { data } = await resp.json();

    const gifts = data.map ( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifts)
    return gifts;
}