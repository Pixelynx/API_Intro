# Dog Breed Picker

"What dog breed should I get next?" Isn't that the question we all ask ourselves? Well, today, we're going to answer that question.

## Part 1

Take a look at the [list of all breeds](https://dog.ceo/api/breeds/list/all) given to us by the Dog API. We're going to make a webpage with a button. When the user clicks on that button, it will suggest a random dog breed to the user.

Go ahead and create two files:

- `index.html`
- `script.js`

Before we get into how we're going to present or process our data, we need our data first. Copy + paste the JSON in the Dog API route posted above into your `script.js` file. Assign it to a variable - let's call it `APIResponse`. **Do not modify this object**. In the future, we won't have the luxury to modify our API response exactly how we want it. We'll have to process it once we receive it.

In your `index.html` file, import your JS file and create a `button` tag with the text "New Breed!". Above your button, create a header with the text "Dog Breed Picker".

## Part 2

Look again at your `APIResponse` object. You can see that it has two keys: `status` (which should contain the value `"success"`) and `message`, which contains all of our dog breeds. Each of these breeds are a key in an object, and each of them has a value, all of which are arrays. Most of these arrays are empty, but a few contain several _sub-breeds_.

Create a new array, `breedList`. This array should contain each of the breeds, _including sub-breeds_. When there is a list of sub-breeds, append each one to the beginning of the primary breed name. Capitalize the first letter of each word.

For example, the `Bulldog` entry in the breed list, which reads: `bulldog: ["boston", "french"]` should be converted into `"Boston Bulldog, French Bulldog"`. By contrast, the entry `chihuahua: []` can be converted into simply `"Chihuahua"`.

## Part 3

It's time to put everything together. Add an event listener to your `button` tag. The event listener should pick a breed from your `breedList` and append the breed underneath the button. If your user has already clicked the button, it should remove the previous breed and provide a new randomly-selected option. It should also update the button's text to read: `Another One!`

Now, style your app! Center everything on the page, give yourself an appealing `background-color`, make your random-breed text large and bold, and make your button a fun, contrasting color!

Congratulations - you just made a simple app!

# Bonus: Rap Name Generator

Did you know that Childish Gambino got his name from a Wu-Tang Clan rap name generator?

Create arrays of `firstNames` and `lastNames`, and using the strategies outlined above, create your own rap name generator!
