import React from "react";

import Header from './Header';
import Meme from './Meme';

export default function Home(){
    return(
        <div className="container">
            <Header />
            <Meme />
        </div>
    );
}