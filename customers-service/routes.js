import express from 'express';
import { pool } from './db.js';

const router = express.Router();

// Obtener todos
router.get('/customers', async (req, res) => {
  const result = await pool.query('SELECT * FROM customers');
  res.json(result.rows);
});

// Crear cliente
router.post('/customers', async (req, res) => {
  const { name, email, phone } = req.body;

  const result = await pool.query(
    `INSERT INTO customers (name, email, phone)
     VALUES ($1, $2, $3) RETURNING *`,
    [name, email, phone]
  );

  res.json(result.rows[0]);
});

// Actualizar cliente
router.put('/customers/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  const result = await pool.query(
    `UPDATE customers
     SET name=$1, email=$2, phone=$3
     WHERE id=$4 RETURNING *`,
    [name, email, phone, id]
  );

  res.json(result.rows[0]);
});

// Eliminar cliente
router.delete('/customers/:id', async (req, res) => {
  const { id } = req.params;

  await pool.query('DELETE FROM customers WHERE id=$1', [id]);

  res.json({ message: 'Customer deleted' });
});

export default router;
