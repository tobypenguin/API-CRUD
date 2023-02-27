const mongoose = require('mongoose');
const AccountRepository = require('../repositories/account.repository')

function validateId(req, res, next) {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }
  next();
}


async function accountNotFound(req, res, next) {
  const id = req.params.id;
  const accountRepository = new AccountRepository();
  const account = await accountRepository.getById(id);
  if (!account) {
    return res.status(404).json({ error: 'Account not found' });
  }
  next();
}

async function noRowEffected(req, res, next) {
  const id = req.params.id;
  const accountRepository = new AccountRepository();
  const account = await accountRepository.getById(id);
  if (!account) {
    return res.status(400).json({ error: 'No row effected' });
  }
  next();
}


module.exports = {
  validateId,
  accountNotFound,
  noRowEffected
};