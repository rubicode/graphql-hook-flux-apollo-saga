var express = require('express');
var router = express.Router();
var firebase = require("firebase");

//Fetch instances
router.get('/', function (req, res) {
  const userReference = firebase.database().ref("/Users/");
  //Attach an asynchronous callback to read the data
  userReference.on("value", function (snapshot) {
    console.log(snapshot.val());
    const data = Object.keys(snapshot.val()).map(o => Object.assign({ userName: o }, snapshot.val()[o]));
    res.json(data);
    userReference.off("value");
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
    res.send("The read failed: " + errorObject.code);
  });
});

router.post('/', function (req, res) {
  const userName = req.body.username;
  const name = req.body.name;
  const age = req.body.age;

  const referencePath = '/Users/' + userName + '/';
  const userReference = firebase.database().ref(referencePath);
  userReference.set({ Name: name, Age: age }, function (error) {
    if (error) {
      res.send("Data could not be saved." + error);
    } else {
      res.send("Data saved successfully.");
    }
  });
});

router.put('/:username', function (req, res) {
  var userName = req.params.username;
  var name = req.body.name;
  var age = req.body.age;

  var referencePath = '/Users/' + userName + '/';
  var userReference = firebase.database().ref(referencePath);
  userReference.update({ Name: name, Age: age }, function (error) {
    if (error) {
      res.send("Data could not be updated." + error);
    } else {
      res.send("Data updated successfully.");
    }
  });
});

router.delete('/:username', function (req, res) {
  var userName = req.params.username;
  var referencePath = '/Users/' + userName + '/';
  var userReference = firebase.database().ref(referencePath);
  userReference.remove((error) => {
    if (error) {
      res.send("Data could not be deleted." + error);
    } else {
      res.send("Data deleted successfully.");
    }
  })
});

module.exports = router;
