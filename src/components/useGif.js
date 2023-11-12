import { useState,useEffect } from "react"
import axios from 'axios';
const apiKey = '9kBQtx8EAw87QflI8giL4P3oj35ZL5QQ';
const Url =`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const useGif = (gifTag) => {


    const [isLoading,setLoading] = useState(true);
    const [gif,setGif] = useState();
    

    async function generateGif(){
        setLoading(true);
        const {data} =await axios.get(((gifTag) ? `${Url}&tag=${gifTag}` : Url));
        let imageSource = data.data.images.downsized_large.url;
        setLoading(false);
        setGif(imageSource);
        console.log(imageSource);
    }
    useEffect(()=>{
        generateGif();console.log(gifTag)},[]
    )
    return {isLoading,gif,generateGif};
}
export default useGif;