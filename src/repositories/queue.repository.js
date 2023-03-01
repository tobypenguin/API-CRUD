const QueueAdapter = require('../adapters/queue.adapter');

class QueueRepository {
    constructor(queueUrl, exchangeName) {
      this.adapter = new QueueAdapter(queueUrl, exchangeName);
    }
  
    async sendMessage(message, routingKey) {
      await this.adapter.connect();
  
      try {
        await this.adapter.publish(message, routingKey);
      } finally {
        await this.adapter.close();
      }
    }
  }

module.exports = QueueRepository;
