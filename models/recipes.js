'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var recipesSchema = Schema( {
  userId: ObjectId,
  userName: String,
  recName: String,
  recIngredients: String,
  recDescription: String,
  recDateCreated: Date,
} );

module.exports = mongoose.model( 'recipes', recipesSchema );
