const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

module.exports = router;
