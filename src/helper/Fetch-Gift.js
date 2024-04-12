


export const FetchGift = async ( searchCategory ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=uCYZxflgZomhMAq55CD5Ow3LjbQFG16M&q=${searchCategory}&limit=3`;

    const response = await fetch(url);

    const { data } = await response.json()
    const objectData = data.map(({id , title , images:{ downsized_medium : { url}}}) => {
        return {
            id,
            title,
            url
        }
    });

    return objectData;

};