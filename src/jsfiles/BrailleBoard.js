import { BrailleAlphabet } from "../jsfiles/alphabet";


function tost(){
    alert(BrailleAlphabet.a.b)
}


let ltr = {
    "t":2,
    "y":2,
    "g":2,
    "h":2,
    "b":2,
    "n":2
}

function updateltr(BLetter){
    ltr.t = (+(BLetter.includes("t")));
    ltr.y = (+(BLetter.includes("y")));
    ltr.g = (+(BLetter.includes("g")));
    ltr.h = (+(BLetter.includes("h")));
    ltr.b = (+(BLetter.includes("b")));
    ltr.n = (+(BLetter.includes("n")));
}
//reset ltr w updatelte("a")
function isLettersEqual(x,y){

   if(x.t== y.t && x.y== y.y&& x.g== y.g&& x.h== y.h&& x.b== y.b&& x.n== y.n){ 
        return true;
    }else{
        return false;
    }

    
}

function translateBLetter(BLetter){
    updateltr(BLetter)
    var currentLetter = ltr;
    var letter;
    const keys = Object.keys(BrailleAlphabet);

    keys.forEach((key, index) => {
        if(isLettersEqual(currentLetter,BrailleAlphabet[key])){
            letter = key;

        }
        //console.log(BrailleAlphabet[key]["t"]);
    });

    return letter;
}


function parseSentence (input){
    var currentBLetter = "";
    var sentence = "";
    for(var i = 0; i<input.length;i++){
        currentBLetter += input.charAt(i);
        if(input.charAt(i) ==' ' && input.charAt(i-1)==' '){
            sentence +=" ";
        }else if(input.charAt(i)==' '){
            sentence = sentence + translateBLetter(currentBLetter);
            currentBLetter= "";
        }
    };
    return sentence;
}

// function checkForErrors(){
//     responsiveVoice.speak("Did you make and error?");

// }




    //$('#first').css('font-size', go)



// for testing purposes "cat" in braille is "ty t yghb "

// $("#braille-box").on('keypress',function(e) {
//     if(e.which == 13) {
//         var Bsentence =$(this).val();
//         alert(parseSentence(Bsentence));
//         responsiveVoice.speak(parseSentence(Bsentence));
//         $(this).value = ' ';


//     }
   
// });


let bruh = parseSentence("tg ")
export {tost,parseSentence}
export {bruh}