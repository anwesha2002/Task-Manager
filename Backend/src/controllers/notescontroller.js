const notesmodel = require("../model/notemodel");
const errorhandler = require("express-async-handler");

const getnotes = errorhandler(async(req,res) => {
    const todo = await notesmodel.find({"status" : "todo"}).exec();
    const doing = await notesmodel.find({"status" : "doing"}).exec();
    const done = await notesmodel.find({"status" : "done"}).exec();
    res.status(200).json({
        todolist:todo,
        doinglist:doing,
        donelist:done,
    });
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
    const status = req.body.status;
    if(!title || !status){
        res.status(400);
        res.json({message : "all fields are mandatory"});
    }
    const newnote = await notesmodel.create({
        title ,
        text ,
        status,
    });
    res.status(201).json(newnote);
});

const updatenote = errorhandler(async(req,res)=>{
    const id = req.params.id;
    const newtitle = req.body.title;
    const newtext = req.body.text;
    const newstatus = req.body.status;
    const task = await notesmodel.findById(id).exec();
    if(!newtitle){
        res.status(400);
        res.json({message: "title is needed"});
    }
    if(!task){
        res.status(404);
        res.json({message : "task not found"});
    }
    
    task.title = newtitle;
    task.text = newtext;
    task.status = newstatus;
    const updatedtask = await task.save();
    res.status(200).json(updatedtask)
})

const deletenote = errorhandler(async(req,res)=>{
    const id = req.params.id;
    const task = await notesmodel.findByIdAndDelete(id);
    if(!task){
        res.status(404);
        res.json({message : "task not found"});
    }
    res.sendStatus(204);
})

module.exports = { getnotes , createnote, updatenote, deletenote};