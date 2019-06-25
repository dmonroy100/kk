'use strict';
const Comment = require( '../models/Comment' );

exports.updateProfile = ( req, res ) => {
  //console.log("in saveSkill!")
  //console.dir(req)

  // update the User info for the current user...
  // find the current Users profilee
  // update user info for current user...

  User,findOne(res.locals.user._id)
  .exec()
  .then((p) => {
    p.userName = req.body.userName
    p.profilePicURL = req.body.profilePicURL
    p.zipcode = req.body.zipcode

    const apikey = "kRtLnrehC0vBmvQFsoQLL2BvV3RLP2shRu9IF2nqmzktC94RQl2w59EPrsJ6yjvO"
    axios.get("")
    p.save()
    .then(() => {
      res.redirect(' /profile ');

    })

  })
};
