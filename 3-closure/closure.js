function nonsense(string) {
  var blab = function () {
    console.log(string);
  };
  setTimeout(blab, 2000);
  return blab;
}

let blabLater = nonsense("thi");
let blabAgainLater = nonsense("this is");
blabLater();
blabAgainLater();

// A function with a closure
var lastNameTrier = function (firstName) {
  var innerFunction = function (lastName) {
    console.log(firstName + " " + lastName);
  };
  return innerFunction;
};
var firstNameFarmer = lastNameTrier("Farmer"); //logs nothing
firstNameFarmer("Brown"); //logs 'Farmer Brown'

const storyWriter = () => {
  let story = "";
  return {
    addWords: function (word) {
      story = " " + word;
      return story;
    },
    erase: function () {
      story = "";
    },
  };
};

var farmLoveStory = storyWriter();
farmLoveStory.addWords("There was once a lonely cow."); // 'There was once a lonely cow.'
farmLoveStory.addWords("It saw a friendly face."); //'There was once a lonely cow. It saw a friendly face.'
var storyOfMyLife = storyWriter();
storyOfMyLife.addWords("My code broke."); // 'My code broke.'
storyOfMyLife.addWords("I ate some ice cream."); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''
