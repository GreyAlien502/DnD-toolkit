.PHONY: all

all: main.js sty.css

main.js: *.jsx
	webpack

sty.css: sty.scss
	sass sty.scss sty.css
