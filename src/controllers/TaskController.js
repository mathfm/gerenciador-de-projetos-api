import TaskRepository from "../repositories/TaskRepository.js";


class TaskController {

    async create(req, res) {
        try {
            const { description_task, priority, status_task } = req.body;
            const project_id = parseInt(req.params.id);
            const deadline = new Date(req.body.deadline);
            const resultado = await TaskRepository.createTask(description_task, deadline, project_id, priority, status_task);
            res.send(resultado).status(200);            
        } catch (e) {
            res.send(e.message).status(404);
        }

    }

    async update(req, res) {
        try {
            const { description_task, priority, status_task } = req.body;
            const id = parseInt(req.params.id);
            const resultado = await TaskRepository.updateTask(description_task, priority, status_task, id);
            res.send(resultado).status(200);
        } catch (e) {
            res.send(e.message).status(404);
        }
    }
    
    async getAll(req, res) {
        try {
            const resultado = await TaskRepository.getAllTask();
            res.send(resultado).status(200);
        } catch (e) {
            res.send(e.message).status(404);
        }
    }

    async getTaskId(req, res) {
        try {
            const id = parseInt(req.params.id);
            const resultado = await TaskRepository.getTask(id);
            res.send(resultado).status(200);            
        } catch (e) {
            res.send(e.message).status(404);
        }
    }

    async delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            const resultado = await TaskRepository.deleteTask(id);
            res.send(resultado).status(200);
        } catch (e) {
            res.send(e.message).status(404);
        }
    }

}

export default new TaskController();