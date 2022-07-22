const router = require('express').Router();
const Job = require('../models/jobs');

router.route('/').get((req,res) => {
    Job.find().then(jobs => {
        res.json(jobs)
    }).catch((err) => res.status(400).json('Error:' + err));
})

//Add new jobs
router.route('/add').post((req,res) => {
    const {title, company, location, image, category, role} = req.body
    const newJob = new Job({
        title, role, company, location, image, category, role
    })

    newJob.save().then(() => res.json('Job added')).catch((err) => res.status
    (400).json('Error: ' + Error));
})

module.exports = router;