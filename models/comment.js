'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var commentSchema = Schema( {
  dish: String,
  comment: String
} );

module.exports = mongoose.model( 'Comment', commentSchema );
