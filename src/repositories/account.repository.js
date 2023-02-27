const Account = require('../entities/schemas/account.schema');

class AccountRepository {
  async create(account) {
    const newAccount = new Account(account);
    await newAccount.save();
    return newAccount.toObject();
  }

  async getById(id) {
    const account = await Account.findById(id).lean();
    return account;
  }

  async update(account) {
    const updatedAccount = await Account.findByIdAndUpdate(account.id, account, {
      new: true,
    }).lean();
    return updatedAccount;
  }

  async delete(id) {
    const deletedAccount = await Account.findByIdAndDelete(id).lean();
    return deletedAccount;
  }
}

module.exports = AccountRepository;
