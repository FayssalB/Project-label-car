const CarController = require("../controllers/index");

module.exports = server => {
    server.get("/", (req, res) =>{
        CarController.getAll(req,res);
    })
    server.post("/", (req,res)=>{
        CarController.create(req,res);
    })
    server.delete("/:id", (req, res) => {
        CarController.delete(req,res);
    });
    server.put("/modify/:id",(req,res)=>{
        CarController.modify(req,res);
    })
}