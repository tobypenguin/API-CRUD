const AccountRepository = require('../repositories/account.repository')
const { accountNotFound } = require('../utilities/validator');

class CreateAccount {
    constructor() {
      this.accountRepository = new AccountRepository();
    }
  
    async execute(account) {
      const createdAccount = await this.accountRepository.create(account);
      return createdAccount;
    }
  }
  
  class GetAccount {
    constructor() {
      this.accountRepository = new AccountRepository();
    }
  
    async execute(id) {
      const account = await this.accountRepository.getById(id);
      return account;
    }
  }
  
  class UpdateAccount {
    constructor() {
      this.accountRepository = new AccountRepository();
    }
  
    async execute(id, account) {
      const existingAccount = await this.accountRepository.getById(id);
      const updatedAccount = {
        ...existingAccount,
        ...account,
        id,
      };
      const savedAccount = await this.accountRepository.update(updatedAccount);
      return savedAccount;
    }
  }
  
  class DeleteAccount {
    constructor() {
      this.accountRepository = new AccountRepository();
    }
  
    async execute(id) {
      const existingAccount = await this.accountRepository.getById(id);
      const deletedAccount = await this.accountRepository.delete(id);
      return deletedAccount;
    }
  }
  
  module.exports = {
    CreateAccount,
    GetAccount,
    UpdateAccount,
    DeleteAccount,
  };
  