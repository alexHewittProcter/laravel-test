# laravel-test
This repo has been created as a simple test of creating a product and basket functional website using Laravel and React.js with a MySQL backend.

##Creating the project
After downloading this repo, the first step is to change the .env file and perhapes the database.php file in *config/database.php*. Set this to whatever database you want to use, note that this have been running on a Mamp MySQL database and hence using a socket instead of a URL.

After this, you will want to run the database migrations to create the tables and add all the data to these tables.
```bash
php artisan migrate
```

After doing this you can then use the following command to run the server.
```bash
php artisan serve
```

##Testing
Some simple tests have been created to test the backend api.
>/api/products
This url returns all the products in the database
>/api/product/{id}
This url returns the product using the url

You can test the project using :
```bash
./vendor/bin/phpunit
```