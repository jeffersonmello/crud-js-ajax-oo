<?php
header('content-type: application/json; charset=utf-8');

ini_set( 'display_errors', true );
error_reporting(E_ALL & ~ E_NOTICE & ~ E_DEPRECATED & E_ERROR | E_PARSE);

include('../../class/crud.php');
require_once('Pessoa.php');

$funct   = $_POST['func'];


$db = new Database();
$db->connect();

$pessoa = new Pessoa();

$res = $pessoa->getPessoas($db);

echo json_encode($res);
?>
