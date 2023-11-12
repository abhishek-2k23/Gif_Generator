import useGif from "./useGif";

export default function Random(){
    const {gif,isLoading,generateGif} = useGif();
    
    return(
        <div className="bg-green-600 border border-green-900 flex flex-col items-center gap-10 w-[709px]  rounded-2xl p-5">
            <h1 className="text-2xl underline">Random Gif</h1>
            <div className="flex justify-center">
            {
                !(isLoading) ? 
                <img src={gif} alt="gif" /> : <div className="spinner"></div>
            }
            </div> 
            
            <button onClick={generateGif} className={`hover:opacity-90 hover:tracking-wider self-stretch bg-white rounded-xl py-3 opacity-50 font-semibold`}>Generate</button>
        </div>
    )
}