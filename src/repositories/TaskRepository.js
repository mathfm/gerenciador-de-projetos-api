import { prisma } from "../prisma.js";

class TaskRepository {
    
    async createTask(description_task, deadline, project_id, priority, status_task) {
        const task = await prisma.task.create({
            data: {
                description_task: description_task,
                deadline: deadline,
                priority: priority,
                status_task: status_task,
                
                project: {
                    connect: {id: project_id}
                }
            }
        })
        return task;
    }

    async getTask(id) {
        const task = await prisma.task.findUnique({
            where: {id: id}
        });
        return task;

     }
    
    async getAllTask() {
        const task = await prisma.task.findMany();
        return task;
    }
    
    async updateTask(description_task, priority, status_task, id) {
        const task = await prisma.task.update({
            where: { id: id },
            data: {
                description_task: description_task,
                priority: priority,
                status_task: status_task
            }
        })
        return task;
     }
    
    async deleteTask(id) {
        const task = await prisma.task.delete({
            where: { id: id}
        })
        return task;
     }

}

export default new TaskRepository();