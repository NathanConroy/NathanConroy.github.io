
FORCE:

prod: FORCE
	git commit -a
	git push
	npm run deploy
