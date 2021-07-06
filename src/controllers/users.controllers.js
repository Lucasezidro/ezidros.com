const Users = require('../models/user.model')

module.exports = {
    index(req, res){
        res.json({message: 'okay'})
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
    }
}