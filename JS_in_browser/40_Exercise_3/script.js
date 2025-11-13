/*

element.innerHTML is used to populate a div with HTML. Search online about this method and create a website
with a div tag containing a random joke given an array of jokes. Use Math.random() and fetch jokes from the 
internet (use any website to create the array). Your website should show a random joke on every reload.
Minimum length of your jokes array should be 10.

*/

let jokes = [
    `Why was the cell phone scared to go to the dentist?<br>
He didn’t want him to remove his blue tooth.`,

    `What did the stuttering pirate say when he turned 80 years old?<br>
Aye, Aye, Matey!`,

    `What did one bug on the windshield say to the other bug on the windshield?<br>
I bet you don’t have the guts to do that again.`,

    `What do dinosaurs and the 9th planet in our solar system have in common?<br>
They’re both extinct.`,

    `What do you give a scientist with bad breath?<br>
Experi-mints`,

    `Where does a scientist wizard work?<br>
In a labracadabratory`,

    `What’s a pirate’s favorite letter?<br>
Nope, not arrrrr. X marks the spot of treasure. You think pirates like R’s more than treasure?`,

    `What did Benjamin Franklin say when he discovered electricity?<br>
Nothing. He was too shocked to speak.`,

    `Why was the Roomba late for class?<br>
It overswept`,

    `What did the picture do to end up in jail?<br>
Nothing. He was framed!`,

    `What musical instrument would you find in a bathroom?<br>
A tuba toothpaste`,

    `What word has 5 letters and starts with “gas”?<br>
Truck`,

    `What did the husband pen say to the wife pen?<br>
You’re always write.`,

    `What race is never run?<br>
The human race`,

    `What is a robot’s favorite snack?<br>
Computer chips`,

    `What is a calendar’s favorite food?<br>
Dates`,

    `How do crazy people go through the forest?<br>
They take the psychopaths.`,

    `Who makes money by driving their customers away?<br>
Uber drivers`,

    `Why did the motorcycle not want to go hiking?<br>
Because he was two-tired`,

    `What kind of award do dentists hate to receive?<br>
A plaque`,

    `What did the hat say to the head?<br>
I’ve got you covered.`,

    `What do you call a medieval lamp?<br>
Knight light`,

    `Why couldn’t the pirate find his playing cards?<br>
He was standing on the deck`,

    `What did the baby laptop call her father?<br>
Data`,

    `Did you hear about the kidnapping in the park?<br>
He woke up.`,

    `What do you call a criminal at the North Pole?<br>
A brrr-gular`,

    `Why did the thief shower before robbing the bank?<br>
So he could make a clean get-away!`,

    `What do you call something that has the head of a man and the tail of an eagle?<br>
A quarter`,

    `What is the ocean’s favorite laundry detergent?<br>
Tide`,

    `What’s the difference between a TV and a magazine?<br>
Ever try to swat a fly with a TV?`,

    `Why can a hand not be 12 inches long?<br>
Because then it would be a foot.`,

    `What is a lawyer’s favorite outfit?<br>
A lawsuit`,

    `Why did the sink ask if the toilet was feeling okay?<br>
He looked flushed.`,

    `What’s the difference between a teacher and a train?<br>
One says spit out your gum and the other says, “Chew, chew!”`,

    `What do you call people who love ceilings?<br>
Ceiling fans`,

    `Did you get that joke about the ceiling?<br>
Me neither. I guess it was over my head.`,

    `What kind of shoes do ninjas wear?<br>
Sneakers`,

    `Why could the pirate never learn the letter “D”?<br>
Because he always got lost at C.`,

    `Why did the escalator going up never want to touch the other escalator?<br>
The other escalator was always coming down with something.`,

    `Why did Liam go out with a fig?<br>
Because he couldn’t get a date.`,

    `What gets wetter the more it dries?<br>
A towel`,

    `What kind of athlete is most like a spider?<br>
Baseball player, they both catch flies!`,

    `Why did we first decide to put candles on top of a birthday cake?<br>
It was too hard to blow them out when they were on the bottom.`,

    `Why was the traffic light late for his date?<br>
It took him too long to change.`,

    `Why couldn’t the NASA scientist get a room reservation on the moon?<br>
It was full.`,

    `How much does it cost for a pirate to get his ears pierced?<br>
A buck-an-ear`,

    `What animal can you always find a a softball game?<br>
A bat`,

    `What kind of key doesn’t open locks?<br>
A monkey`,

    `Why was it so cold in the basketball arena?<br>
There were so many fans.`,

    `What kind of witch can’t do any magic?<br>
A sandwich`,

    `Why did you stop being a vegetarian?<br>
It was a huge missed steak.`,

    `Why is everyone so tired on April 1st?<br>
They just finished a 31 day march.`,

    `What is fast and crunchy?<br>
A rocket chip`,

    `Where do people in Antarctica get their hair cut?<br>
At the brrr-brrr shop`,

    `What do you call a phony serpent?<br>
A fake snake`,

    `What do you call an overweight dog?<br>
A round hound`,

    `What kind of party is thrown in a cemetery?<br>
A grave rave`,

    `What does a ghoul eat for dinner?<br>
Ghost roast`,

    `What do you call a furry bird?<br>
A hairy canary`,

    `What do you call a tired tent?<br>
A sleepy teepee`,

    `What do you call an enchanted iguana?<br>
The wizard lizard`,

    `What do you call a jelly bean found on the beach?<br>
Sandy candy`,

    `How do you weigh an orca?<br>
With a whale scale`,

    `What do you call a bull’s food?<br>
Cow chow`,

    `What do you call a mean sandwich?<br>
Rude food`,

    `What is the most musical kind of animal?<br>
Fish, they’re full of scales.`,

    `What does a desert nurse always carry?<br>
A thirst-aid kit`,

    `What did the astronaut say to the nosy reporter?<br>
No comet`,

    `What has 4 wheels and flies?<br>
A garbage truck`,

    `Why do Santa’s elves love making hip-hop music?<br>
To show off their wrapping skills`,

    `How do you prepare for a party in outer-space?<br>
You planet`,

    `What kind of party do snails have?<br>
A shell-ebration`,

    `Why wasn’t the dolphin sorry?<br>
Because he did it on porpoise`,

    `What do you call a bear who lost its dentures?<br>
A gummy bear`,

    `What is the largest moth ever discovered?<br>
The mammoth`,

    `Which country is always in a hurry?<br>
Rush-a!`,

    `How do you calm an astronaut baby?<br>
You rocket`,

    `What do you get a hunter for his birthday?<br>
A birthday pheasant`,

    `My friend likes to take the elevator, but I like to take the stairs.<br>
I guess we were raised differently.`,

    `What do you call a wet bear?<br>
A drizzly bear`,

    `What do you call someone who can’t stick to their diet?<br>
A desserter`,
]

let randomindex = Math.floor(Math.random() * jokes.length);
let newJoke = jokes[randomindex];

console.log(newJoke)

let a = document.getElementsByClassName("inner")[0];
a.innerHTML = newJoke

function Next() {
    location.reload();
}                           // This function is reloading the page



// let b = document.getElementsByClassName("btn")[0];

// b.addEventListener("click", () => {
//     location.reload();
// })

// Method-2 to reload the page

// document.querySelector(".btn").addEventListener("click", () => {
//     location.reload();
// });

// Method-3 to reload the page