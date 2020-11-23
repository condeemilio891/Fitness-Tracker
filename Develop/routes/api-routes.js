const router = require("express").Router();
const { Router } = require("express");
const db = require("../models");


 


router.get("/api/workouts", (req, res) => {
  console.log('get route')
  db.Workout.find({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err)
    })})



router.post("/api/workouts", ({ body }, res) => {
  
  db.Workout.create(body).then((dbWorkout => {
      res.json(dbWorkout);
  })).catch(err => {
      res.json(err);
  });
});



router.put("/api/workouts/:id", ({body, params}, res) => {
  // console.log(body, params)
  const workoutId = params.id;
  let savedExercises = [];

  // gets all the currently saved exercises in the current workout
  db.Workout.find({_id: workoutId})
      .then(dbWorkout => {
          // console.log(dbWorkout)
          savedExercises = dbWorkout[0].exercises;
          res.json(dbWorkout[0].exercises);
          let allExercises = [...savedExercises, body]
          console.log(allExercises)
          updateWorkout(allExercises)
      })
      .catch(err => {
          res.json(err);
      })})

      app.put("/markread/:id", ({ params }, res) => {
        db.books.update(
          {
            _id: mongojs.ObjectId(params.id)
          },
          {
            $set: {
              read: true
            }
          },
      
          (error, edited) => {
            if (error) {
              console.log(error);
              res.send(error);
            } else {
              console.log(edited);
              res.send(edited);
            }
          }
        );
      });
      
      app.put("/markunread/:id", ({ params }, res) => {
        db.books.update(
          {
            _id: mongojs.ObjectId(params.id)
          },
          {
            $set: {
              read: false
            }
          },
      
          (error, edited) => {
            if (error) {
              console.log(error);
              res.send(error);
            } else {
              console.log(edited);
              res.send(edited);
            }
          }
        );
      });

router.get("/api/workouts/range", (req, res) => {

  db.Workout.find({}).then(dbWorkout => {
      console.log(dbWorkout);

      res.json(dbWorkout);
  }).catch(err => {
      res.json(err);
  });

});

module.exports = router;




















// router.get("api/workouts/range",(req,res)=>{
//   db.Workout.find()
//   .then(dbdata=>{
//     res.json(dbdata)
//   })
//   .catch (err =>{
//     res.json(err)
//   })
// })

// router.post("/api/workouts", ({body}, res) => {
//   db.Workout.create({body})
//   .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
//   .then(dbUser => {
//     res.json(dbUser)
//     .catch(err => {
//       res.json(err);
//     });
// });})

// router.put("/api/workouts/:id", ({ params, body }, res) => {
//   db.Workout.findByIdAndUpdate(
//     {_id:params.id},
//     { $push: { exercises: body } },
//     // "runValidators" will ensure new exercises meet our schema requirements
//     { upsert:true, useFindAndModify:false })
//     .then(updatedWorkout=>{
//       res.json(updatedWorkout)
//     }
//   )
//     // .then(dbWorkout => {
//     //   res.json(dbWorkout);
//     // })
//     .catch(err => {
//       res.json(err);
//     })
// });
// router.put('/api/workouts/:id', ({ body }, res) => {
//   db.Workout.updateEvents(body)
//   .then(({ _id }) => db.User.findByIdAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
//   .then(dbUser => {
//     res.json(dbUser);
//   })
//   .catch(err => {
//     res.json(err);
//     });})







// const router = require("express").Router();

// const { Schema } = require("mongoose");
// // const { json } = require("body-parser");
// const db = require("../models");


// router.get("/api/workouts",(req,res)=>{
//     console.log('get route')
// db.Plan.find({})
// .then(data=>{
//     res.json(data)
// })
// .catch(err=>{
//     res.status(400).json(err)
// })
// })

// router.post('/api/workouts', (req, res)=> {
//     console.log('api post route')

//     db.Plan.create({})
//     .then(data=>{
//         res.json(data);
//     })
//     .catch(err=>{
//         res.status(400).json(err);
//     });
// });
// router.put("/api/workouts/:id", ({body, params}, res) => {
//     console.log("putting with id: ", params.id);

//     db.Plan.findByIdAndUpdate(
//         params.id,
//         {$push:{exercises:body}},
//         {new:true,runValidators:true}
//     )
//     .then(data => {
//         res.json(data);
//     })
//     .catch(err => {
//         res.json(err);
//     })

// })



// module.exports=router
