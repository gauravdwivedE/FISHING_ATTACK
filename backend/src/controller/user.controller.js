const userModel = require('../models/user.model')

module.exports.inserUser = async(req, res) => {
    try {
        const {username, password} = req.body || {}
        console.log(username, password);
        
        const user = await userModel.create({username, password})

        res.status(201).json({
          user
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

module.exports.selectUser = async(req, res) => {
    try {
        const users = await userModel.find()
        res.status(200).json({
          users
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}