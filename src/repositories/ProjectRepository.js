import { prisma } from "../prisma.js";

class ProjectRepository {
    async createProject(user_id_creator, name_project, description_project, project_priority) {
        const project = await prisma.project.create({
            data: {
                user_id_creator: user_id_creator,
                name_project: name_project,
                description: description_project,
                project_priority: project_priority,
            }
        });
        return project;
    }

    async updateProject(id_project, name_project, description_project, project_priority) {
        const project = await prisma.project.update({
            where: { id: id_project },
            data: { 
                name_project: name_project,
                description: description_project,
                project_priority: project_priority
             }
        })
        return project;
     }
    
    async deleteProject(id) { 
        const project = await prisma.project.delete({
            where: { id: id }
        })
        return project;
    }

    async getAllProject() {
        const project = await prisma.project.findMany();
        return project;
    }

    async getProject(id) {
        const project = await prisma.project.findUnique({
            where: { id: id }
        })
        return project;
    }

}

export default new ProjectRepository();