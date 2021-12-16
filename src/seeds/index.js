const seedCategories = require("./category-seeds");
const seedProducts = require("./product-seeds");
const seedTags = require("./tag-seeds");
const seedProductTags = require("./product-tag-seeds");

const connection = require("../config/connection");
const { logError } = require("../utils/logger");

const seedAll = async () => {
  try {
    await connection.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");
  } catch (error) {
    logError("BD connection", error.message);
  }

  await seedCategories();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  await seedProducts();
  console.log("\n----- PRODUCTS SEEDED -----\n");

  await seedTags();
  console.log("\n----- TAGS SEEDED -----\n");

  await seedProductTags();
  console.log("\n----- PRODUCT TAGS SEEDED -----\n");
  process.exit(0);
};

seedAll();
