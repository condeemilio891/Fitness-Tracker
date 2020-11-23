const router = require("express").Router();
const db = require("../models");



// get workouts from database 
router.get("/api/workouts", (req, res) => {
  console.log('get route')
  db.Workout.find({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err)
      
    });
});

   // add exercise
   router.put("/api/workouts/:id", (req, res) => {

    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        { new: true }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });

});


router.post("/api/workouts", ({ body }, res) => {
  
  db.Workout.create(body).then((dbWorkout => {
      res.json(dbWorkout);
  })).catch(err => {
      res.json(err);
  });
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
