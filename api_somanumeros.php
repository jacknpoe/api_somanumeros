<?php
	//***********************************************************************************************
	// AUTOR: Ricardo Erick Rebêlo
	// Objetivo: API de retorno de JSON da soma de três números
	// Alterações:
	// 0.1   13/01/2024 - primeira implementação

	header('Content-Type: application/json');

	$json = file_get_contents('php://input');		// pega o JSON da requisição
	$data = json_decode($json);		// decodifica para objeto

	$resultado = $data->valor1 + $data->valor2 + $data->valor3;
	$resultado = str_replace( '.', ',', strval( $resultado));

	echo json_encode($resultado);
?>