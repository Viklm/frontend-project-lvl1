install: #Установить зависимости
	npm ci
brain-games: #Запуск игры
	node bin/brain-games.js
brain-even: #Запуск игры на чётность
	node bin/brain-even.js
brain-calc: #Запуск игры на выражения
	node bin/brain-calc.js
brain-gcd: #Запуск игры на нахождения НОД
	node bin/brain-gcd.js
brain-progression: #Запуск игры на арифметическую прогрессию
	node bin/brain-progression.js
brain-prime: #Запуск игры на простое число
	node bin/brain-prime
publish:
	npm publish --dry-run
lint:
	npx eslint .
rec: #Запись терминала
	asciinema rec