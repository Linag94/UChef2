import axios from "axios";

const xhrHeader = {
  headers: {
    xhrFields: {
      withCredentials: true
    }
  }
};

export default {
  // Spoonacular routes ============================
  getSpoonacularResults: (id, num) =>{
    return axios.get(`/api/spoonacular/spoonrecipes/${id}/${num}`)
  },
  getSpoonacularInstructions: id =>{
    return axios.get(`/api/spoonacular/spooninstructions/${id}`)
  },
  getSpoonacularIngredients: id =>{
    return axios.get(`/api/spoonacular/spooningredients/${id}`)
  },
  updateUserByRecipeId: (id, recipeID, name, image ) => axios.put("/api/user/"+id, {
    id: id, 
    recipeID: recipeID,
    name: name,
    image: image
  }),
  
  // Recipes routes ============================
  getRecipes: ()=> axios.get("/api/ingredients"),
  addRecipe: data => axios.post("/api/ingredients", data),
  findRecipeById: id=> axios.get("/api/ingredients/" + id),
  deleteRecipetById: id => axios.delete("/api/ingredients/" + id),
  
  // user cookbook routes ============================
    // getUserCookBook: ()=> axios.get("/api/cookbook"),
  // addIngredient: data => axios.post("/api/ingredients", data),
  // findIngredientById: id=> axios.get("/api/ingredients/" + id),
  // updateIngredientById: id=> axios.put("/api/ingredients/" + id),
  // deleteIngredientById: id => axios.delete("/api/ingredients/" + id),
  
  // Ingredients routes ============================
  getIngredients: ()=> axios.get("/api/ingredients"),
  addIngredient: data => axios.post("/api/ingredients", data),
  findIngredientById: id=> axios.get("/api/ingredients/" + id),
  updateIngredientById: id=> axios.put("/api/ingredients/" + id),
  deleteIngredientById: id => axios.delete("/api/ingredients/" + id),

  // User routes ============================
  loginUser: function (user) {
    return axios.post("/api/user", user, xhrHeader)
  },
  signup: function (user) {
    return axios.post("/api/user/signup", user, xhrHeader)
  },
  authenticateUser: function () {
    return axios.post("/api/user/authenticate", xhrHeader)
  },
  findRecipesByUser: id => axios.get("/api/user/" + id),


};
