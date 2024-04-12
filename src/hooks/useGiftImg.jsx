import { useEffect, useState } from "react";
import { FetchGift } from "../helper/Fetch-Gift";




export const useGiftImg =  ( searchCategory ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages =  async (  ) => {
        const newImages = await FetchGift( searchCategory )
        setImages( newImages )
        setIsLoading(false);
    }; 

    useEffect( () => {
        getImages(  );
        
    }, []);


    return {
        images,
        isLoading
    }
};