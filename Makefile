.PHONY: all clean

all: main.js sty.css

main.js: *.jsx
	webpack

sty.css: sty.scss
	sass sty.scss sty.css

clean:
	rm sty.css main.js
