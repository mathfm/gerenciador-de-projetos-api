import UserRepository  from "../repositories/UserRepository.js";

class UserController {
    async create(req, res) {
        try {
            const { username, email, password } = req.body;
            if (username && email && (password.length  >= 8)) {
                const resultado = await UserRepository.createUser(username, email, password);
                res.status(201).send(resultado);                
            }
            else 
                throw new Error(`Um dos campos esta em branco ou a senha não atinge o minimo de 8 caracteres.`)
        } catch (e) {
            res.status(422).send(e.message);
        }
    }

    async update(req, res) {
        try {
            if (email && (password.lenght >= 8)) {
                const { email, password } = req.body;
                const id = parseInt(req.params.id);
                const resultadoConslta = await UserRepository.updateUser(email, password, id);
                res.status(201).send(resultadoConslta);                
            }
            else throw new Error('Nâo foi possivel atualizar os dados')
        } catch (e) {
            res.status(422).send(e.message);
        }
    }

    async getAll(req, res) {
        const consulta = await UserRepository.getAllUser();
        res.send(consulta).status(200);
    }

    async getById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const consulta = await UserRepository.getUserId(id);
            if (consulta)
                res.status(200).send(consulta);
            else
                res.status(404).send('Usuario não encontrado.');
        } catch (e) {
            res.send(e.message).status(404);
        }
    }

    async deleteUser(req, res) { 
        try {
            const id = parseInt(req.params.id);
            const consulta = await UserRepository.deleteUser(id);
            if (consulta) 
                res.status(200).send(200);    
            else throw new Error('O id não foi encontrado')   
        } catch (e) {
            res.send(e.message).status(400);
        }
    }
}

export default new UserController();