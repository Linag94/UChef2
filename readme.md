https://github.com/ronerlih/project-3-boiler-authentication

// morgan docs
https://www.npmjs.com/package/morgan



-- How to get seed data 

    1. npm run seed
    2. npm start

--- Routes to call to get data (NB need to npm start first)

Get recipes
http://localhost:3000/api/spoonacular/spooningredients/:ingredient/:numberOfResults

Get instructions (NB need recipe ID from above)
http://localhost:3000/api/spoonacular/spooninstructions/:id

Get ingredients (NB need recipe ID from above)
http://localhost:3000/api/spoonacular/spooningredients/:id
