# [#KupiSlona](http://kupislona.msemerni.php.a-level.com.ua/ads)

///////////////////////////////////////////////////////////
React: как хостить
helium
папки в public_html - ваши поддомены;
запускаем npm run build в корне проекта
заливаем на helium (и, возможно, переименовываем) папку build в папку ~/public_html
имя папки (поддомена) НЕ должно содержать дефисы (-)
пробуем зайти на http://build(лучше таки переименуйте).username.php.a-level.com.ua
Для работы роутинга в SPA в корень проекта кладем .htaccess:
RewriteEngine on
# If a directory or a file exists, use the request directly
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
# Otherwise forward the request to index.html
RewriteRule . index.html [L]
github.io
Добавляем зависимость упрощающую работу с Github Pages.
yarn add -D gh-pages
Добавить в package.json в раздел scripts, два новых значения:
Автоматически запускает сборку перед выполнением публикации.
"predeploy": "yarn run build",
Выполняет публикацию приложения на Github Pages
"deploy": "npx gh-pages -d build",
Добавляем в package.json новое значение, на верхнем уровне, нужно для правильной подргузки ресурсов сайта:
"homepage": "./",
Ex.
{
    ...
    "homepage": "./",
    "scripts": {
        ...
    }
    ...
}
Запускаем сборку и публикацию на Github Pages
yarn run deploy
Открыть репозиторий на github.com -> Вкладка Settings -> GitHub Pages
Выбрать ветку: gh-pages
Перейти по ссылке выделенной зеленым: Your site is published at ...
heroku
Заходим на heroku и регистрируемся
После успешной регистрации попадаем на dashboard и жмем кнопку New -> Creacte New App
После заполнения маленькой формы вы переходите на страницу вашего проэкта -> переходим в пункт Deploy и находим там Download and install the Heroku CLI., там есть инструкции для всех ОС
Проверить что все ок - в консоли/терминале набрать heroku -v
После есть несколько вариантов деплоя вашего приложения, при чем не важно деплоите ли вы node.js приложение или react-app созданный с помощью create-react-app
В интерфесе вашего приложения на heroku можно подвязать учетную запись GitHub -> выбрать репозиторий -> выбрать ветку и нажать Deploy Branch -> после сборки вы получите ссылку на ваше приложение
В терминале набираем heroku login -> следуем подсказкам и логинимся
Переходим в папку с проектом и в консоли делаем стандартные команды git add . и git commit -m 'some desc'
Переходим на heroku и в Deploy и находим ваши данные по remote heroku типа: heroku git:remote -a [your app name] и вводим их терминал
Переходим на heroku и в Settings находим и нажимаем кнопку Add buildPack - ВНИМАНИЕ для node.js приложения вводим heroku/nodejs, для react-app вводим mars/create-react-app после этот билдпак должен появится в списке
(ОПЦИОНАЛЬНО) Предыдущий шаг можно сделать в консоли/терминале - node.js приложения вводим heroku buildpacks:set heroku/nodejs, для react-app вводим heroku buildpacks:set mars/create-react-app
ВАЖНО Нужно удостоверится что вы пользуетесть только npm или только yarn, если у вас в проекте есть package-lock.json и yarn.lock вам нужно удалить оба файла сделать npm i или yarn и повторить пункт 1
После всего успешного выполнения набираем git push heroku master ждем билда и получаем ссылку / так же в интерфесе heroku можно будет открыть приложение на прямую
P.S
Убедитесь что ваш packege.json содержит:
    // ОБЯЗАТЕЛЬНО ДЛЯ REACT-app
	"scripts": {
		"start": "react-scripts start",
		"build": "react-scripts build",
	}
	
	// ОБЯЗАТЕЛЬНО ДЛЯ NODE.js
	"scripts": {
		"start": "node index.js", 
	},
Если у вас есть переменные env - их нужно прописать на heroku в интерфейсе приложения:
Во вклдадке Settings находим и нажимаем Reveal Config Vars
Вводим переменные в виде key = value

//////////////////////////////////////////////////////////////////////////////////////////////

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
