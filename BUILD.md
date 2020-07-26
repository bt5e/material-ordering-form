## build GitHub pages
ng build --prod --output-path docs --base-href /material-ordering-form/
cp docs/index.html docs/404.html
git add .
