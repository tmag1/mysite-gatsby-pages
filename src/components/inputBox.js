import React from 'react'
import { useState } from 'react';
import { parseSentence } from '../jsfiles/BrailleBoard'


const InputBox = () => {
    const [translation,updateTrltn] = useState("Placeholder")
    function getData(e){
        if(e.key == 'Enter') {
        //alert(e.target.value)
        // alert(bruh);
        // alert(typeof(e.target.value))
        //alert(parseSentence(e.target.value));
        //translatedSentence = parseSentence(e.target.value);
        updateTrltn(parseSentence(e.target.value))
    
        }
    }

    return (
        <div>
        <script type = "text/javascript" src= "https://code.responsivevoice.org/responsivevoice.js"></script>
        <p style = {{fontSize: `30px`, fontWeight:`bold`}}>Type in "Braille" here:</p>
        <input type="text" onKeyDown={getData}/>
        <p style = {{fontSize: `30px`, fontWeight:`bold`, color:'orange'}}>Your translated sentence: "{translation}"</p>
        </div>
    )
}

export default InputBox
