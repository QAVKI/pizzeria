const express = require('express'); 
const app = express(); 
require('@babel/register');
const morgan = require('morgan'); 
const path = require('path');
require('dotenv').config(); 

//подключаем template
const render = require('./lib/render');

//подключаем views
const Err404 = require('./views/Error404');

//импорт вспомогательных ф-й
const dbCheck = require('./db/dbCheck');

// импорт роутов
const indexRoutes = require('./routes/indexRoutes');
const authRoutes = require('./routes/auth.route');
const privateRoutes = require('./routes/private.route');

 // вызов функции проверки соединения с базоый данных
dbCheck();

//подключаем сессию и файлсторадже для хранения куки
const session = require('express-session');
const FileStore = require('session-file-store')(session);

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//создаем куки
// время жизни cookies, ms (10 дней)
const sessionConfig = {
  name: 'sid', 
  store: new FileStore({}), 
  secret: process.env.COOKIE_SECRET, 
  resave: false, 
  saveUninitialized: false, 
  cookie: {
    secure: process.env.NODE_ENV === 'production', 
    maxAge: 1000 * 60 * 60 * 24 * 10, 
  },
};

// мидлварка для сессии
app.use(session(sessionConfig));

// проверяем есть ли юзер на странице
app.use((req, res, next) => {
  console.log('\n\x1b[33m', 'req.session.user :', req.session?.user);
  res.locals.username = req.session?.user?.name;
  next();
});

//роутеры
app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/private', privateRoutes);

//Отлов всех ошибочных запросов
app.get('*', (req, res) => {
  render(Err404, {}, res);
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message)
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
