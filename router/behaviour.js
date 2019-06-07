
var Error = require('../configuration/app-erro');

const router = require('express').Router();
const model = require('../models/index');


router.get('/', function (req, res, next) {
   model.Behaviour.findAll({})
        .then(behaviours => res.json({
            error: false,
            data: behaviours
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

router.get('/:id', function (req, res, next) {

    const behaviour_id = req.params.id;
   model.Behaviour.fin({})
        .then(behaviours => res.json({
            error: false,
            data: behaviours
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});



router.post('/', function (req, res, next) {
    const {
        document
    } = req.body;
    model.Behaviour.create({
            document: document
        })
        .then(behaviour => res.status(201).json({
            error: false,
            data: behaviour,
            message: 'New behaviour has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: me
        }));
});


router.put('/:id', function (req, res, next) {
 
    const behaviour_id = req.params.id;
 
    const { document } = req.body;
 
    model.Behaviour.update({
            document: document
        }, {
            where: {
                id: behaviour_id
            }
        })
        .then(behaviour => res.json({
            error: false,
            message: 'behaviour has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});


router.delete('/:id', function (req, res, next) {
    const behaviour_id = req.params.id;
 
    model.Behaviour.destroy({ where: {
        id: behaviour_id
    }})
        .then(status => res.json({
            error: false,
            message: 'behaviour has been delete.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});


module.exports =  router;
