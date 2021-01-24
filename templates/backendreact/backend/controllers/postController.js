const Post = require('../models/Post');

exports.createPost = (req, res)=>{
    const post = new Post({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    })
    post.save()
    .then(()=>res.status(201).json({message: 'data saved!'}))
    .catch(()=>res.status(400).json({message: 'error request'}))
};

exports.getAll = (req, res)=>{
    Post.find()
    .then(posts=>res.status(201).json({posts}))
    .catch(()=>res.status(500).json({message: 'error server!'}))

};

exports.editPost = (req, res)=>{
    Post.updateOne({ _id: req.params.id}, { ...req.body, _id: req.params.id })
    .then(()=>res.status(201).json({message: 'data updated!'}))
    .catch(()=>res.status(400).json({message: 'bad request!'}))

};

exports.getOne = (req, res)=>{
    Post.findOne({ _id: req.params.id})
    .then((post)=>res.status(201).json({post}))
    .catch(()=>res.status(400).json({message: 'bad request!'}))

};

exports.deleteOne = (req, res)=>{
    Post.deleteOne({ _id: req.params.id})
    .then(()=>res.status(201).json({message: 'data deleted!'}))
    .catch(()=>res.status(400).json({message: 'bad request!'}))

};