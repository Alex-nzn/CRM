function getTestData() {
  const testData = [
    {
      name: "Михаил Паниковский",
      phone: 89998887755,
      email: "misha@list.ru",
      product: "course-vue",
    },
    {
      name: "Остап Бендер",
      phone: 89998887766,
      email: "ostap@mail.ru",
      product: "course-js",
    },
    {
      name: "Шура Балаганов",
      phone: 89998887777,
      email: "shura@inbox.ru",
      product: "course-html",
    },
    {
      name: "Адам Козлевич",
      phone: 89998887788,
      email: "adam@yahoo.com",
      product: "course-wordpress",
    },
    {
      name: "Зося Синицкая",
      phone: 89998887799,
      email: "zosya@gmail.com",
      product: "course-php",
    },
    {
      name: "Александр Корейко",
      phone: 89998887700,
      email: "alex@yandex.ru",
      product: "course-html",
    },
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const randomIndex = getRandomInt(testData.length);
  return testData[randomIndex];
}

export { getTestData };
