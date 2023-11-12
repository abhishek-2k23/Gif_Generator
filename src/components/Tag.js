import { useState } from "react";
import useGif from "./useGif";

// const apiKey = '9kBQtx8EAw87QflI8giL4P3oj35ZL5QQ';
export default function Tag(){
    const [gifTag,setGifTag] = useState({gifName:"Cute Cat"});

    function changeHandler(event){
        setGifTag((prev) => {
            return{...prev,[event.target.name] : event.target.value}
        })
    }

    let title = `Random ${gifTag.gifName} gifs`

    //Custom Hook
    const {isLoading,gif,generateGif} = useGif(gifTag);

    return(
        <div className="bg-blue-600 border border-green-900 flex flex-col items-center gap-5 w-[709px]  rounded-2xl p-5">
            <h1 className="text-2xl underline">{title}</h1>
            {
                !(isLoading) ? 
                <img src={gif} alt="gif" /> : <div className="spinner"></div>
            }
            <input name='gifName' placeholder="Enter the gif name" value={gifTag.gifName} onChange={changeHandler} className="self-stretch bg-white rounded-xl py-3 text-center"/>
            <button onClick={generateGif} className="self-stretch bg-white rounded-xl py-3 opacity-60 hover:opacity-90 font-semibold hover:tracking-wider">Generate</button>
        </div>
    )
}