const router = require("express").Router();
const db = require("../models");




router.get("/api/workouts", (req, res) => {
  console.log('get route')
  db.Workout.find()
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err)
      console.log('get route eerrr');
    });
});


router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ params, body }, res) => {
  db.Workout.findByIdAndUpdate(
    {_id:params.id},
    { $push: { exercises: body } },
    // "runValidators" will ensure new exercises meet our schema requirements
    { upsert:true, useFindAndModify:false })
    .then(updatedWorkout=>{
      res.json(updatedWorkout)
    }
  )
    // .then(dbWorkout => {
    //   res.json(dbWorkout);
    // })
    .catch(err => {
      res.json(err);
    })
});




module.exports = router;




























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



module.exports=router
