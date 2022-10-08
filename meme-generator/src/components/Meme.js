import React from "react";

import memesData from "./data/get_memes";

export default function Meme(){

    let url = '';
    let text = '';

    function just_click(){
        if( memesData.success ) {
            const memesArr = memesData.data.memes;
            const RandomNumer = Math.floor(Math.random() * memesArr.length);
            url = memesArr[RandomNumer].url;
            console.log(url);
        }
    }


    let thingArray = [ 'things1', 'things2' ];
    let thingsabc = '';
    function just_click2(){
        thingArray.push('hello');
        thingsabc = thingArray.map(thing => <p key={thing}>{thing}</p>);
        console.log(thingsabc);

    }







    return (
        <main>
            <form className="meme-form">
                <input type="text" placeholder="Top Text" className="top_text"/>
                <input type="text" placeholder="Bottom Text" className="bottom_text"/>
                <button>Get a new meme image  🖼</button>
            </form>
            <img src={url} />
            <button className="demo-btn" onClick={just_click2}>Hello World</button>
            {thingsabc}


        </main>
    );
}