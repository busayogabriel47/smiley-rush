document.getElementById("show").addEventListener("click", showText);
document.getElementById("hide").addEventListener("click", hideText);
document.getElementById("mood").addEventListener("click", chosenMood);



const heading = document.getElementById("first-heading");
const firstText = document.getElementById("first-text");
const pictureTopic = document.getElementById("picture-topic");
const secondHeading = document.getElementById("second-heading");
const currentMood = document.getElementById("current-mood");
const secondHeadingP2 = document.getElementById("second-heading-p2");
const moodPassage = document.getElementById("mood-passage");
const last = document.getElementById("last");
const first = document.getElementById("first");
const third = document.getElementById("third");
const chosenMoodSelect = document.getElementById("chosen-mood");
const moodImage = document.getElementById("mood-image");

const moodData = {
    Sad: {
        mood: "Sad",
        passage: "Some days are just bad days, that’s all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day, that’s just the way it is!",
        image: "./images/sad.png"
    },
    Happy: {
        mood: "Happy",
        passage: "There is no happiness like that of being loved by your fellow creatures, and feeling that your presence is an addition to their comfort.",
        image: "./images/happy.jpg"
    },
    Humorous: {
        mood: "Humorous",
        passage: "I always wanted to be somebody, but now I realize I should have been more specific.",
        image: "./images/humorous.jpg"
    },
    Gloomy: {
        mood: "Gloomy",
        passage: "There are moments when you wish you could roll back the clock and take all the sadness away, but you have the feeling that if you did, the joy would be gone as well.",
        image: "./images/gloomy.jpg"
    },
    Angry: {
        mood: "Angry",
        passage: "Hey! No matter what it is, life is never so serious. Call up your friends, watch a favorite movie or just sleep it off. Come back and choose a new mood when done!",
        image: "./images/angry.jpg"
    }
};


function showText(event) {
    event.preventDefault();
    heading.innerHTML = "Welcome to Smiley Rush";
    firstText.innerHTML = "Select a mood and I will show you your match your current feeling and a mood management recommendation :)";
    pictureTopic.innerHTML = "MOOD BOARD";
    secondHeading.innerHTML = "CURRENT MOOD";
    currentMood.innerHTML = "";
    secondHeadingP2.innerHTML = "MOOD RECOMMENDATION";
    moodPassage.innerHTML = "";
    last.innerHTML = "Mood recommendation App was built by";
    first.innerHTML = "Kamsi Nwosu";
    third.innerHTML = "find me on GitHub";
    alert("Do you want to show text?");
}

function hideText(event) {
    event.preventDefault();
    heading.innerHTML = "";
    firstText.innerHTML = "";
    pictureTopic.innerHTML = "";
    secondHeading.innerHTML = "";
    currentMood.innerHTML = "";
    secondHeadingP2.innerHTML = "";
    moodPassage.innerHTML = "";
    last.innerHTML = "";
    first.innerHTML = "";
    third.innerHTML = "";
    alert("Do you want to hide text?");
}

function chosenMood(event) {
    event.preventDefault();
    const selectedMood = chosenMoodSelect.value;
    if (selectedMood) {
        currentMood.innerHTML = moodData[selectedMood].mood;
        moodPassage.innerHTML = moodData[selectedMood].passage;
        moodImage.src = moodData[selectedMood].image;
    } else {    
        alert("Please select a mood.");
    }
}