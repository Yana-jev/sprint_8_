import { Router } from 'express';
import { getLocations, postLocation, deleteLocation } from '../controllers/locationcontroller';

const router = Router();

router.get('/', getLocations);
router.post('/', postLocation);
router.delete('/:id', deleteLocation);

export default router;
