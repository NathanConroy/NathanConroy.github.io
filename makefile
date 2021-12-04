
FORCE:

prod: tests
	git commit -a
	git push
	npm run deploy

tests: FORCE
	npm run test -- --watchAll=false
