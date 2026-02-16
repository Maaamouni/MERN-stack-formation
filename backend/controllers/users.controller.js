// definition de l'API

import User from '../models/users.model.js';

export const getUsers = async (req, res) => {
    try{
        const users = await User.find({});
        res.status(200).json({success: true, data: User})
    }
    catch{
        res.status(500).json({message:'Server problem'})
    }
}

export const CreateUser = async (req,res) => {
    const user = req.body;
    
    if(!user.email || !user.username || !user.lastname || !user.firstname || !user.password){
        res.status(400).json({success:false, message:'Arguments missing!!'})
    }
    const newUser = new User(user);

    try{
        await newUser.save();
        res.status(200)
    }catch{
        res.status(500)
    }
}

// put et delete