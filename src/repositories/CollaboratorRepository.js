import { prisma } from "../prisma.js";

class CollaboratorRepository {
    async createCollaborator(function_project, status_collaborator, task_id, user_id, project_id) {
        const collaborator = await prisma.collaborator.create({
            data: {
                function_project: function_project,
                status_collaborator: status_collaborator,
                task: {
                    connect: {id : task_id}
                },
                project: {
                    connect: {id : project_id}
                },
                user: {
                    connect: { id: user_id }
                }

            }
        })
        return collaborator;
    }

    async getAllCollaborator() {
        const collaborator = await prisma.collaborator.findMany();
        return collaborator;
    }

    async getCollaboratorId(id) {
        const collaborator = await prisma.collaborator.findUnique({
            where: { id: id }
        })
        return collaborator;
    }

    async deleteCollaborator(id) {
        const collaborator = await prisma.collaborator.delete(
            { where: { id: id } } )
        return collaborator;
    }

    async updateCollaborator(id, status_collaborator, function_project) {
        const collaborator = await prisma.collaborator.update({
            where: { id: id },
            data: {
                status_collaborator: status_collaborator,
                function_project: function_project
            }
        })
        return collaborator;
    }    
    
}

export default new CollaboratorRepository();