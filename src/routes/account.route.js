const express = require('express');
const router = express.Router();
const AccountRepository = require('../repositories/account.repository');
const {CreateAccount ,GetAccount ,UpdateAccount ,DeleteAccount} = require('../usecases/account.usecase');
const { validateId, accountNotFound, noRowEffected } = require('../utilities/validator');

const accountRepository = new AccountRepository();

router.post('/', async (req, res, next) => {
  const createAccount = new CreateAccount(accountRepository);
  try {
    const account = await createAccount.execute(req.body);
    res.json(account);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',validateId, accountNotFound,async (req, res, next) => {
  try {
    const getAccount = new GetAccount(accountRepository);
    const account = await getAccount.execute(req.params.id);
    res.json(account);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', validateId, noRowEffected,async (req, res, next) => {
  try {
    const updateAccount = new UpdateAccount(accountRepository);
    const account = await updateAccount.execute(req.params.id, req.body);
    res.json(account);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', validateId, noRowEffected,async (req, res, next) => {
  try {
    const deleteAccount = new DeleteAccount(accountRepository);
    const account = await deleteAccount.execute(req.params.id);
    res.json(account);
  }catch (error) {
    next(error);
  }
});

module.exports = router;
