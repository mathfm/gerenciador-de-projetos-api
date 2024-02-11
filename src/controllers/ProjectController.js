import ProjectRepository from "../repositories/ProjectRepository.js";

class ProjectController {
    async create(req, res) {
        try {
            const user_id = parseInt(req.params.id);
            const { name_project, description_project, project_priority } = req.body;
            
            if (name_project && description_project && project_priority) {
               const resultado = await ProjectRepository.createProject(user_id, name_project, description_project, project_priority);
                res.send(resultado).status(200);      
            }
            else {
                res.send('Preencha todos os campos').status(400);
            }
                   
        } catch (e) {
            res.send(`erro na criação do projejo ${e.message}`).status(404);
        }

    }

    async update(req, res) {
        try {
            const id_project = parseInt(req.params.id2);
            const { name_project, description_project, project_priority } = req.body;
            if (name_project && description_project && project_priority) {
                const resultado = await ProjectRepository.updateProject(id_project, name_project, description_project, project_priority);
                res.send(resultado).status(200);
            }
            else {
                res.send('Preencha todos os campos').status(400);
            }
            
        } catch (e) {
            res.send(`Erro na atualização do projeto ${e.message}`).status(404);
        }
    }

    async delete(req, res) {
        try {
            const id_project = parseInt(req.params.id);
            const resultado = await ProjectRepository.deleteProject(id_project);
            res.send(resultado).status(200);
            
        } catch (e) {
            res.send(`Erro na inesperado na hora de deletar o projeto ${e.message}`).status(404);
        }
    }

    async getAllProjects(req, res) {
        try {
            const resultado = await ProjectRepository.getAllProject();
            res.send(resultado).status(200);
        } catch (e) {
            res.send(`Erro na inesperado na exibição`).status(404);
        }
    }

    async getProject(req, res) {
        try {
            const id = parseInt(req.params.id);
            const resultado = await ProjectRepository.getProject(id);
            res.send(resultado).status(200);
        } catch (e) {
            res.send(`Erro na inesperado na exibição`).status(404);
        }
    }

}


export default new ProjectController();