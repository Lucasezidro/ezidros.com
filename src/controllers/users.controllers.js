const { default: users } = require('../models/user.model');
const Users = require('../models/user.model')

module.exports = {
    async index(req, res){
        const user = await Users.find()
        res.json(user)
    }, 
    async create(req,res){
        const { email_usuario, adress_usuario, date_usuario, service_usuario } = req.body;

        let data = {}
        let user = Users.findOne({email_usuario});

        if(!user) {
            data = [email_usuario, adress_usuario, date_usuario, service_usuario]
            user = await Users.create(data);
            return res.status(200).json(user);
        } else {
            return res.status(500).json(user);
        }
    },
    async details(req, res){
        const {_id} = req.params
        const user = await Users.find({_id})
        res.json(user)
    }, 

    async delete(req, res){
        const {_id} = req.params;
        const user = await Users.findByIdAndDelete({_id})
        return res.json(user)
    },

    async update(req, res){
        const {_id, email_usuario, adress_usuario, date_usuario, service_usuario} = req.body
        const data = {email_usuario, adress_usuario, date_usuario, service_usuario} = req.body
        const user = await Users.findByIdAndUpdate({_id}, data, {new: true});
        res.json(user)
    }
}