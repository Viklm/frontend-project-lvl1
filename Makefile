install: #Установить зависимости
	npm ci
start: #Запуск
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .