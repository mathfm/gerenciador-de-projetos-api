-- DropForeignKey
ALTER TABLE `collaborator` DROP FOREIGN KEY `Collaborator_task_id_fkey`;

-- AlterTable
ALTER TABLE `collaborator` MODIFY `task_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Collaborator` ADD CONSTRAINT `Collaborator_task_id_fkey` FOREIGN KEY (`task_id`) REFERENCES `Task`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
