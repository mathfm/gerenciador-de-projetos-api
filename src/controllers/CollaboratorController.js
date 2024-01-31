import CollaboratorRepository from "../repositories/CollaboratorRepository.js";

class CollaboratorController {
    async create(req, res) {
        try {
            const { function_project } = req.body;
            const id = parseInt(req.params.id);
            const id2 = parseInt(req.params.id2);
            const task_id = parseInt(req.body.task_id);
            const status_collaborator = "ACTIVE";
            
            const resultado = await CollaboratorRepository.createCollaborator(function_project, status_collaborator, task_id, id, id2);
            
            res.send(resultado).status(200);

        } catch (e) {
            res.send(e.message).status(404);
        }

    }

    async getAll(req, res) {
        try {
            const resultado = await CollaboratorRepository.getAllCollaborator();
            res.send(resultado).status(200);            
        } catch (e) {
            res.send(e.message).status(404);
        }
    }

    async getById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const resultado = await CollaboratorRepository.getCollaboratorId(id);
            res.send(resultado).status(200);
        } catch (e) {
            res.send(e.message).status(404);
        }
    }

    async update(req, res) {
        try {
            const { status_collaborator, function_project } = req.body;
            const id = parseInt(req.params.id)
            const resultado = await CollaboratorRepository.updateCollaborator(id, status_collaborator, function_project);
            res.send(resultado).status(200);
        } catch (e) {
            res.send(e.message).status(404);
        }
    }

    async delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            const resultadp = await CollaboratorRepository.deleteCollaborator(id);
            res.send(resultadp).status(200);
        } catch (e) {
            res.send(e.message).status(404);
        }
    }

}

export default new CollaboratorController();