'use strict';
const Recipe = require( '../models/Recipes' );

exports.saveRecipes = ( req, res ) => {
  
  if (!res.locals.loggedIn) {
    return res.send("You must be logged in to post to the forum.")
  }

  let newRecipe = new Recipe(
   {
    userId: req.user._id,
    userName:req.user.googlename,
    recName: req.body.recName,
    recIngredients: req.body.recIngredients,
    recDescription: req.body.recDescription,
    recDateCreated: new Date()
   }
  )

  newRecipe.save()
    .then( () => {
      res.redirect( 'recipes' );
    } )
    .catch( error => {
      res.send( error );
    } );
};


exports.getAllRecipes = ( req, res, next ) => {
  Recipe.find({}).sort({recDateCreated: -1})
    .exec()
    .then( ( recipes ) => {
      res.render('recipes',{recipes:recipes,title:"Recipes"})
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
    } );
};

exports.deleteRecipes = (req, res) => {
  console.log("in deleteRecipes")
  let deleteId = req.body.delete
  if (typeof(deleteId)=='string') {
      Recipe.deleteOne({_id:deleteId})
           .exec()
           .then(()=>{res.redirect('/recipes')})
           .catch((error)=>{res.send(error)})
  } else if (typeof(deleteId)=='object'){
      Recipe.deleteMany({_id:{$in:deleteId}})
           .exec()
           .then(()=>{res.redirect('/recipes')})
           .catch((error)=>{res.send(error)})
  } else if (typeof(deleteId)=='undefined'){
      res.redirect('/recipes')
  }

};
