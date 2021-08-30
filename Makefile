install: #Установить зависимости
	npm ci
brain-games: #Запуск игры
	node bin/brain-games.js
brain-even: #Запуск игры на чётность
	node bin/brain-even.js
brain-calc: #ЗАпуск игры на выражения
	node bin/brain-calc.js
publish:
	npm publish --dry-run
lint:
	npx eslint .