const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Profile = require("../models/Profile");

//GET api/profiles to get all user's profiles, private access
router.get("/", auth, async (req, res) => {
  try {
    const profiles = await Profile.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

//POST api/profiles to add new profile, private access
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type, profile_picture_url } = req.body;

    try {
      const newProfile = new Profile({
        name,
        email,
        phone,
        type,
        user: req.user.id,
        profile_picture_url,
      });

      const profile = await newProfile.save();

      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error!!!");
    }
  }
);

//PUT api/profiles/:id to update profile, private access
router.put("/:id", auth, async (req, res) => {
    const { name, email, phone, type, profile_picture_url } = req.body;
  
    //Profile object
    const profileFields = {};
    if (name) profileFields.name = name;
    if (email) profileFields.email = email;
    if (phone) profileFields.phone = phone;
    if (type) profileFields.type = type;
    if (profile_picture_url) profileFields.type = profile_picture_url;
  
    try {
      let profile = await Profile.findById(req.params.id);
  
      if (!profile) return res.status(404).json({ msg: "Profile not found" });
  
      // does user own profile?
      if (profile.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: "Not Authorized!!!" });
      }
  
      profile = await Profile.findByIdAndUpdate(
        req.params.id,
        { $set: profileFields },
        { new: true }
      );
  
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  });

//DELETE api/profiles/:id to delete profile, private access
router.delete("/:id", auth, async (req, res) => {
    try {
      let profile = await Profile.findById(req.params.id);
  
      if (!profile) return res.status(404).json({ msg: "Profile not found" });
  
      // does user own profile?
      if (profile.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: "Not Authorized!!!" });
      }
  
      await Profile.findByIdAndRemove(req.params.id);
  
      res.json({ msg: "Profile removed!" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  });

module.exports = router;
