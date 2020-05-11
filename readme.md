# Uchef

Have you ever wanted to make a need recipe and didn't have all the ingredients to make it? Now you have to leave your recipe app and go to your note app. Look no futhered. Uchef allows you to do both in one appliction. 

## How to get seed data

1. npm run seed
2. npm start.


##Routes to call to get data (NB need to npm start first)

* Get recipes here (http://localhost:3000/api/spoonacular/spooningredients/:ingredient/:numberOfResults)

* Get instructions (NB need recipe ID from above) here (http://localhost:3000/api/spoonacular/spooninstructions/:id)

* Get ingredients (NB need recipe ID from above) here (http://localhost:3000/api/spoonacular/spooningredients/:id)
