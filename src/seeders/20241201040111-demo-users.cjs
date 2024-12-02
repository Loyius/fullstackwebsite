'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Admin',
        sobrenome: 'Default',
        cpf: '00000000000',
        idade: 30,
        genero: 'masculino',
        email: 'admin@email.com',
        password: '123456', // Use hash de senha em produção
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
