import { prisma } from '../prisma.js';

class UserRepository {
    async createUser(username, email, password) {
        const user = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: password,
            }  
        })
        return user;
    }

    async updateUser(email, password, id) { 
        try {
            const userUpdate = await prisma.user.update({
                where: { id: id },
                data: {
                    password: password,
                    email: email
                }
            }); 

            return userUpdate;

            
            
        } catch (error) {
            throw new Error(error)
        }
        
    }

    async getAllUser() {
        try {
            const getAll = await prisma.user.findMany();
            return getAll;
        } catch (e) {
            throw new Error(`Ocorreu um erro ao tentar obter os dados: ${e.message}`);
        }
    }

    async getUserId(id) {
        try {
            const user = await prisma.user.findUnique({
                where: { id: id }
            })
            return user;
        } catch (e) {
            throw new Error(`Ocorreu um erro ao tentar obter os dados: ${e.message}`);
        }
    }

    async deleteUser(id) {
        try {
            const userDeleted = prisma.user.delete({
                where: {id: id}
            })
            return userDeleted;
        } catch (e) {
            throw new Error(`Não foi possivel localizar o id. ${e.message}`);            
        }
    }

}

export default new UserRepository();