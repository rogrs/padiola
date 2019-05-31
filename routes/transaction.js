import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const transactions = await req.context.models.Transaction.findAll();
  return res.send(transactions);
});

router.get('/:transactionId', async (req, res) => {
  const transaction = await req.context.models.Transaction.findByPk(
    req.params.transactionId,
  );
  return res.send(transaction);
});

router.post('/', async (req, res) => {
  const transaction = await req.context.models.Transaction.create({
    document: req.body.text,
 
  });

  return res.send(transaction);
});

router.delete('/:transactionId', async (req, res) => {
  const result = await req.context.models.Transaction.destroy({
    where: { id: req.params.transactionId },
  });

  return res.send(true);
});

export default router;
