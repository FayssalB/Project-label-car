// https://medium.com/@thejasonfile/a-pithy-perusal-of-post-and-put-and-patch-52a7f6443ceb#:~:text=In%20this%20case%2C%20that%20would,along%20with%20the%20POST%20request.
const CarModel = require("../model/index");

module.exports = {

    getAll(req,res) {
        CarModel.find().then(cars => {
            res.send(cars);
        })
    },

    create(req,res){
        const car = new CarModel({
            name: req.body.name,
            options: req.body.options,
                aircondition: req.body.aircondition,
                navigation: req.body.navigation,
                transmission: req.body.transmission,
                person: req.body.person
            ,
            image: req.body.image,
            price: req.body.price,
            reservations: req.body.reservations
        });
        car.save().then(() => res.send("Voiture ajouté au garage"));
    },
    delete(req,res){
        const id = req.params.id;
        CarModel.findByIdAndRemove(id).then(car=>res.send(`Suppression de la voiture ${car.name}`))
    },

    modify(req,res){
        const id = req.params.id;
        const names = req.params.name;
        CarModel.findByIdAndUpdate(id, {$set: req.body}).then(car=>res.send(car));
    }
}


// {
//     "name": "Mercedes",
//         "options": {
//             "aircondition": true,
//             "navigation": true,
//             "transmission": "AUTOMATIC",
//             "person": 5
//         },
//         "image": "https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/mb-c-klasse-4d-grau-2020.png",
//         "price": 199,
//         "reservations": 3
// }