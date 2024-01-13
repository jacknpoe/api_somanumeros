<?php
	header('Content-Type: application/json');

	$json = file_get_contents('php://input');		// pega o JSON da requisição
	$dados = json_decode($json);		// decodifica para objeto

	$resultado = $dados->valor1 + $dados->valor2 + $dados->valor3;

	echo json_encode($resultado);
?>
