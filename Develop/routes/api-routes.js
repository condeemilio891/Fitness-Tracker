const router = require("express").Router();
const { Router } = require("express");
// const db = require("../models");

const Workout = require("../models").Workout;
 
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => res.json(err));
});




router.post("/api/workouts", ({ body }, res) => {
  
  Workout.create(body).then((dbWorkout => {
      res.json(dbWorkout);
  })).catch(err => {
      res.json(err);
  });
});


      // router.put("/api/workout/:id", ({ params }, res) => {
      //   db.Workout.update({}).then(dbWorkout=>{
      //     res.json(dbWorkout)
      //   })
      //     .catch(err=>{
      //       res.json(err);
      //     });
      //   })
  
      // router.put("/api/workouts/:id", (req, res) => {
      //   Workout.Update(
      //     req.params.id,
      //     { $push: { exercises: req.body } },
      //     { new: true }
      //   )
      //     .then(workout => res.json(workout))
      //     .catch(err => res.json(err));
      // });
      router.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
          params.id,
          { $push: { exercises: body } },
          // "runValidators" will ensure new exercises meet our schema requirements
          { new: true, runValidators: true }
        )
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
      });



router.get("/api/workouts/range", (req, res) => {

  Workout.find({}).then(dbWorkout => {
      console.log(dbWorkout);

      res.json(dbWorkout);
  }).catch(err => {
      res.json(err);
  });

});

module.exports = router;

















