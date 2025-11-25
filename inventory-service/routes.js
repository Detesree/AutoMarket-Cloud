import express from 'express';
import { pool } from './db.js';

const router = express.Router();

// Obtener todos los vehículos
router.get('/vehicles', async (req, res) => {
  const result = await pool.query('SELECT * FROM vehicles');
  res.json(result.rows);
});

// Agregar vehículo
router.post('/vehicles', async (req, res) => {
  const { brand, model, year, price, status } = req.body;

  const result = await pool.query(
    `INSERT INTO vehicles (brand, model, year, price, status)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [brand, model, year, price, status]
  );

  res.json(result.rows[0]);
});

// Actualizar vehículo
router.put('/vehicles/:id', async (req, res) => {
  const { id } = req.params;
  const { brand, model, year, price, status } = req.body;

  const result = await pool.query(
    `UPDATE vehicles 
     SET brand=$1, model=$2, year=$3, price=$4, status=$5 
     WHERE id=$6 RETURNING *`,
    [brand, model, year, price, status, id]
  );

  res.json(result.rows[0]);
});

// Eliminar vehículo
router.delete('/vehicles/:id', async (req, res) => {
  const { id } = req.params;

  await pool.query('DELETE FROM vehicles WHERE id=$1', [id]);

  res.json({ message: 'Vehicle deleted' });
});

export default router;
