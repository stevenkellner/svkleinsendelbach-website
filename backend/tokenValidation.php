<?php
  	$secretKey = '6LeRPV8aAAAAAAJKL8vZUw1K8EwUQC_sjQOhkmmz';
	$token = json_decode(file_get_contents('php://input'))->recaptcha;
  	$userIp = $_SERVER['REMOTE_ADDR'];
  	$url = 'https://www.google.com/recaptcha/api/siteverify?secret='.$secretKey.'&response='.$token.'&remoteip='.$userIp;

	$response = file_get_contents($url);
	$response = json_decode($response);

	$res = array('success'=>true, 'message'=>'reCAPTCHA passed');
	if ($token === NULL || empty($token)) {
		$res = array('success'=>false, 'message'=>'Token is empty or invalid', 'token'=>$token);
	} else if (!$response->success) {
		$res = array('success'=>false, 'message'=>'reCAPTCHA failed', 'response'=>$response);
	}
	echo json_encode($res);