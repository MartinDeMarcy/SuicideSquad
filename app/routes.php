<?php
// Home page
$app->get('/', function () {
    require '../src/homepage.php';
    
    ob_start();             // start buffering HTML output
    require '../view/home_page.html';
    $view = ob_get_clean(); // assign HTML output to $view
    return $view;
});