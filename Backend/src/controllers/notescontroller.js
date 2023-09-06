const notesmodel = require("../model/notemodel");
const errorhandler = require("express-async-handler");

const getnotes = errorhandler(async(req,res) => {
    const notes = await notesmodel.find({category: req.params.category}).exec();
    res.status(200).json(notes);
});

/*const getnote = async(req,res, next) => {
    var id = '64ef1302eb65e26812b211d0';
    try {
        const note = await notesmodel.findById(id).exec();
        res.status(200).json(note);
    } catch (error) {
        console.log(error);
    }
};*/

const createnote = errorhandler(async(req,res)=>{
    const title = req.body.title;
    const text = req.body.text;
    const category = req.body.category;
    if(!title || !category){
        res.status(400);
        res.json({message : "all fields are mandatory"});
    }
    const newnote = await notesmodel.create({
        title ,
        text ,
    });
    res.status(201).json(newnote);
});

module.exports = { getnotes , createnote};