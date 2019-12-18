const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ecoChefDB"
);


// Add Ingredients seed data
const ingredientsSeed = [
  {
    spoonRecipeID: "485365",
    amount: "2",
    unit: "tbsp",
    name: "butter",
    date: new Date(Date.now())
  },
];

db.Ingredients
  .remove({})
  .then(() => db.Ingredients.collection.insertMany(ingredientsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted Ingredients!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


// Add Recipes seed data
const recipesSeed = [
  {
    spoonRecipeID: "485365",
    title: "Chicken Spinoccoli – Breaded Stuffed Chicken Breast With Spinach, Broccoli and Cheese",
    cookTime: "15",
    date: new Date(Date.now())
  },
];

db.Recipes
  .remove({})
  .then(() => db.Recipes.collection.insertMany(recipesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted Recipes!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


// Add Recipes seed data
const instructionsSeed = [
  {
    spoonRecipeID: "485365",
    stepNum: "1",
    name: "Pound the chicken to an even thickness. Season with salt and pepper on both sides. Prep the rest of the ingredients.",
    date: new Date(Date.now())
  },
];

db.Instructions
  .remove({})
  .then(() => db.Instructions.collection.insertMany(instructionsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted Instructions!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


const userSeed = [
  {
    email: "ecochef@ecochef.com",
    username: "ecochef",
    password: "$2b$14$KRhatV7/.47LQuDbHwysR.ue1F16Bl05/lpDGbfZpuhzWK9kugpiO",
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted User!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



// ---- ORIGINAL SEED DATA FROM BOOKS (DELETE LATER) ----


// // Update this later
// const bookSeed = [
//   {
//     title: "The Dead Zone",
//     author: "Stephen King",
//     synopsis:
//       "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
//     date: new Date(Date.now())
//   },
// ];

// db.Book
//   .remove({})
//   .then(() => db.Book.collection.insertMany(bookSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
