const router = require("express").Router();


const Workout = require("../models").Workout;
 
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(dbWorkouts => res.json(dbWorkouts))
    .catch(err => res.json(err));
});

router.get("/api/workouts/range", (req, res) => {

  Workout.find({}).limit(7).then(dbWorkout => {
      console.log(dbWorkout)
      res.json(dbWorkout);
  }).catch(err => {
      res.json(err);
  });

});


router.post("/api/workouts", (req, res) => {
  
  Workout.create({}).then(dbWorkout => {
      res.json(dbWorkout);
  }).catch(err => {
      res.json(err);
  });
});

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





module.exports = router;

















