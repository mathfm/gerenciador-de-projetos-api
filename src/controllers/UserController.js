import UserRepository  from "../repositories/UserRepository.js";

class UserController {
    async create(req, res) {
        try {
            const { username, email, password } = req.body;
            const resultado = await UserRepository.createUser(username, email, password);
            res.send(resultado).status(200);
        } catch (e) {
            res.status(400).send(`Erro ao criar o usuario error: ${e.message}`);
        }
    }

    async update(req, res) {
        try {
            const { email, password } = req.body;
            const id = parseInt(req.params.id);
            const resultadoConslta = await UserRepository.updateUser(email, password, id);
            res.send(resultadoConslta).status(200);

        } catch (e) {
            res.status(400).send(`Erro ao atualizar o usuario error: ${e.message}`);
        }
    }

    async getAll(req, res) {
        const consulta = await UserRepository.getAllUser();
        res.send(consulta).status(200);
    }

    async getById(req, res) {
        const id = parseInt(req.params.id);
        const consulta = await UserRepository.getUserId(id);
        res.send(consulta).status(200);
    }

    async deleteUser(req, res) { 
        const id = parseInt(req.params.id2);
        const consulta = await UserRepository.deleteUser(id);
        res.send(consulta).status(200);
    }
}

export default new UserController();