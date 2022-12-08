module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        login: 'AdminPapa',
        password: 123456,
        email: 'idi.tudoy@yandex.ru',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('Products', [
      {
        logo: '/images/pizza1.png',
        title: 'МяснойБалдёж',
        price: 999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza2.png',
        title: 'Маргарита',
        price: 499,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza3.png',
        title: 'ОтБабушки',
        price: 899,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza4.png',
        title: 'МамаСита',
        price: 1199,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza5.png',
        title: 'Крестьянская',
        price: 999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza6.png',
        title: 'Студенческая',
        price: 299,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza7.png',
        title: 'БеконСити',
        price: 899,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza8.png',
        title: 'Веганская',
        price: 399,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza9.png',
        title: 'Побоище',
        price: 699,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza10.png',
        title: 'Зимняя',
        price: 499,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza11.png',
        title: 'Италико',
        price: 799,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza12.png',
        title: 'КакДома',
        price: 699,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza13.png',
        title: 'КрасныйЗакат',
        price: 999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza14.png',
        title: 'Весенняя',
        price: 599,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza15.png',
        title: 'Немецкая',
        price: 799,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza16.png',
        title: 'Летняя',
        price: 1199,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza17.png',
        title: 'Фламенко',
        price: 899,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza18.png',
        title: 'Диабло',
        price: 999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza19.png',
        title: 'Мачете',
        price: 599,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza20.png',
        title: 'Домашняя',
        price: 799,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza21.png',
        title: 'Мясная',
        price: 1099,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logo: '/images/pizza22.png',
        title: 'ТонкийВилли',
        price: 999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};