import React from "react";
import memesData from "./data/get_memes";

export default function Meme(){

    // let [url, setgenerateimgUrl] = React.useState('https://i.imgflip.com/30b1gx.jpg');

    const [ meme, setmeme ] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/30b1gx.jpg'
    });

    const [ allMemeImage, setallMemeImage ] = React.useState(memesData);

    function generateImage(e){
        e.preventDefault();
        if( allMemeImage.success ) {
            const memesArr = allMemeImage.data.memes;
            const RandomNumer = Math.floor(Math.random() * memesArr.length);
            setmeme(prevmeme => ({
                ...meme,
                randomImage: memesArr[RandomNumer].url
            }));
        }
    }


    return (
        <main>
            <form className="meme-form">
                <input type="text" placeholder="Top Text" className="top_text"/>
                <input type="text" placeholder="Bottom Text" className="bottom_text"/>
                <button onClick={generateImage}>Get a new meme image</button>
            </form>
            <img src={meme.randomImage} />
        </main>
    );
}