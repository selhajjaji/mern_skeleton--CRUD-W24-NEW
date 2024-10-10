import express from 'express'
 import supplementsCtrl from '../controllers/supplements.controller.js' 
 const router = express.Router();

// Routes définies selon le tableau
router.route('/supplements')
  .get(supplementsCtrl.list)      // GET /supplements
  .post(supplementsCtrl.create)    // POST /supplements
  .delete(supplementsCtrl.removeAll); // DELETE /supplements

router.route('/supplements/:id')
  .get(supplementsCtrl.read)      // GET /supplements/:id
  .delete(supplementsCtrl.remove); // DELETE /supplements/:id

export default router;
