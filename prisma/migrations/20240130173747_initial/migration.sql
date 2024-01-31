/*
  Warnings:

  - You are about to alter the column `username` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(60)`.
  - You are about to alter the column `email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(120)`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `username` VARCHAR(60) NOT NULL,
    MODIFY `email` VARCHAR(120) NOT NULL;

-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_project` VARCHAR(200) NOT NULL,
    `description` TEXT NOT NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `project_priority` ENUM('LOW', 'MEDIUM', 'HIGH', 'URGENT') NOT NULL,
    `user_id_creator` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Collaborator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `integration_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `function_project` ENUM('DEVELOPER', 'DESIGNER', 'PROJECT_MANAGER', 'QA_TESTER') NOT NULL,
    `status_collaborator` ENUM('INACTIVE', 'ACTIVE', 'SUSPENSE') NOT NULL,
    `project_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `task_id` INTEGER NOT NULL,

    UNIQUE INDEX `Collaborator_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `description_task` TEXT NOT NULL,
    `deadline` DATETIME(3) NOT NULL,
    `collaborator_id` INTEGER NOT NULL,
    `project_id` INTEGER NOT NULL,
    `priority` ENUM('LOW', 'NORMAL', 'HIGH', 'CRITICAL') NOT NULL,
    `status_task` ENUM('TODO', 'IN_PROGRESS', 'REVIEW', 'DONE') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProjectToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProjectToUser_AB_unique`(`A`, `B`),
    INDEX `_ProjectToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Collaborator` ADD CONSTRAINT `Collaborator_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Collaborator` ADD CONSTRAINT `Collaborator_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Collaborator` ADD CONSTRAINT `Collaborator_task_id_fkey` FOREIGN KEY (`task_id`) REFERENCES `Task`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectToUser` ADD CONSTRAINT `_ProjectToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectToUser` ADD CONSTRAINT `_ProjectToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
