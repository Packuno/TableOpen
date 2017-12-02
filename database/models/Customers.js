const bookshelf = require('../index').bookshelf;
const Reservation = require('./Reservations');

const Customer = bookshelf.Model.extend({
  tableName: 'customers',
  byId(id) {
    return this.forge().query({ where: { id } }).fetch();
  },
  reservation() {
    return this.belongsTo('Reservation');
  },
});

module.exports = bookshelf.model('Customer', Customer);