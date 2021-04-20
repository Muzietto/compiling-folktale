# compiling-folktale
Sample creation of webpack bundle containing a standalone Folktale library file

## main branch
- install dependencies with npm
- copy the content of file doc/copy-documentation.js into node_modules/folktale/helpers/copy-documentation.js
- compile library with 'npx webpack'
- produced library file is dist/folktale.js
- example utilization: serve static/index.html with http-server and open the webtools

## branch webpack-numbers
Full example worked out from https://webpack.js.org/guides/author-libraries/
