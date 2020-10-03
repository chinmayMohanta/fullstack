'use strict';
// Getting reference to the following elements in the DOM
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.\n";
let insertX = ["Willy the Goblin","Big Daddy","Father Christmas"]
let insertY = ["the soup kitchen","Disneyland","the White House"]
let insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"]

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":insertx:",xItem).replace(":inserty:",yItem).replace(":insertz:",zItem).replace(":insertx:",xItem);

    if(customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace("Bob",name)

    }

    if(document.getElementById("uk").checked) {
        let weight = Math.round(300*0.0714286) + " stone";
        let temperature =  Math.round((94-32) * (5/9)) + " centigrade";

        newStory = newStory.replace(/94 fahrenheit/,temperature).replace(/300 pounds/,weight) // Replace with regular expression


    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}