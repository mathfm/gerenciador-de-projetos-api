import { Router } from "express";
import UserController from "./controllers/UserController.js";
import ProjectController from "./controllers/ProjectController.js";
import TaskController from "./controllers/TaskController.js";
import CollaboratorController from "./controllers/CollaboratorController.js";

const routes = Router();


routes.post('/register', UserController.create);
routes.get('/user/', UserController.getAll);
routes.get('/user/:id', UserController.getById);
routes.put('/user/:id/update', UserController.update);
routes.delete('/user/:id/delete', UserController.deleteUser);


routes.post('/user/:id/create-project', ProjectController.create);
routes.put('/project/:id2/update', ProjectController.update);
routes.get('/project/:id', ProjectController.getProject);
routes.get('/project/', ProjectController.getAllProjects);
routes.delete('/project/:id/delete', ProjectController.delete);


routes.post('/project/:id/create-task', TaskController.create);
routes.get('/task/', TaskController.getAll);
routes.get('/task/:id', TaskController.getTaskId);
routes.put('/task/:id/update', TaskController.update);
routes.delete('/task/:id/delete', TaskController.delete);



routes.post('/user/:id/project/:id2/register-collaborator', CollaboratorController.create);
routes.get('/collaborator/', CollaboratorController.getAll);
routes.get('/collaborator/:id', CollaboratorController.getById);
routes.put('/collaborator/:id/update', CollaboratorController.update);
routes.delete('/collaborator/:id/delete', CollaboratorController.delete);





export default routes;