/*
  Warnings:

  - You are about to drop the column `contact_first_name` on the `order_addresses` table. All the data in the column will be lost.
  - You are about to drop the column `contact_last_name` on the `order_addresses` table. All the data in the column will be lost.
  - You are about to drop the column `contact_phone` on the `order_addresses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "order_addresses" DROP COLUMN "contact_first_name",
DROP COLUMN "contact_last_name",
DROP COLUMN "contact_phone";
