install: #Установить зависимости
	npm ci
brain-games: #Запуск игры
	node bin/brain-games.js
brain-even: #Запуск игры на чётность
	node bin/brain-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .