import React from "react";
import memesData from "./data/get_memes";

export default function Meme(){

    let [url, setgenerateimgUrl] = React.useState('');

    function generateImage(e){
        e.preventDefault();
        if( memesData.success ) {
            const memesArr = memesData.data.memes;
            const RandomNumer = Math.floor(Math.random() * memesArr.length);
            setgenerateimgUrl(memesArr[RandomNumer].url);
        }
    }


    return (
        <main>
            <form className="meme-form">
                <input type="text" placeholder="Top Text" className="top_text"/>
                <input type="text" placeholder="Bottom Text" className="bottom_text"/>
                <button onClick={generateImage}>Get a new meme image</button>
            </form>
            <img src={url} />
        </main>
    );
}