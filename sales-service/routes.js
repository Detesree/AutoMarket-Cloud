import express from 'express';
import { pool } from './db.js';

const router = express.Router();

// Obtener todas las ventas
router.get('/sales', async (req, res) => {
  const result = await pool.query('SELECT * FROM sales');
  res.json(result.rows);
});

// Crear venta
router.post('/sales', async (req, res) => {
  const { vehicle_id, customer_id, total, sale_date } = req.body;

  const result = await pool.query(
    `INSERT INTO sales (vehicle_id, customer_id, total, sale_date)
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [vehicle_id, customer_id, total, sale_date]
  );

  res.json(result.rows[0]);
});

// Actualizar venta
router.put('/sales/:id', async (req, res) => {
  const { id } = req.params;
  const { vehicle_id, customer_id, total, sale_date } = req.body;

  const result = await pool.query(
    `UPDATE sales
     SET vehicle_id=$1, customer_id=$2, total=$3, sale_date=$4
     WHERE id=$5 RETURNING *`,
    [vehicle_id, customer_id, total, sale_date, id]
  );

  res.json(result.rows[0]);
});

// Eliminar venta
router.delete('/sales/:id', async (req, res) => {
  const { id } = req.params;

  await pool.query('DELETE FROM sales WHERE id=$1', [id]);

  res.json({ message: 'Sale deleted' });
});

export default router;
