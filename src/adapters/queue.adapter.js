const amqp = require('amqplib');

class QueueAdapter {
	constructor() {
		this.queueUrl = 'amqp://root:root@localhost:5672';
		this.exchangeName = 'account-queue';
		this.createQueueName = 'account:create:queue';
		this.updateQueueName = 'account:update:queue';
		this.deleteQueueName = 'account:delete:queue';
	  }

	async connect() {
		this.connection = await amqp.connect(this.queueUrl);
		this.channel = await this.connection.createChannel();

		await this.channel.assertExchange(this.exchangeName, 'topic');

		await this.createQueue(this.createQueueName, 'create');
		await this.createQueue(this.updateQueueName, 'update');
		await this.createQueue(this.deleteQueueName, 'delete');
	}

	async createQueue(queueName, routingKey) {
		await this.channel.assertQueue(queueName);
		await this.channel.bindQueue(queueName, this.exchangeName, routingKey);
	}

	async publish(message, routingKey) {
		await this.channel.publish(this.exchangeName, routingKey, Buffer.from(message));
	}

	async close() {
		await this.channel.close();
		await this.connection.close();
	}
}

module.exports = QueueAdapter;
