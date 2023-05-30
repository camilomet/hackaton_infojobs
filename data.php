<?php
$url = 'https://api.infojobs.net/api/9/offer?q=react';  // Replace with your API endpoint URL
$clientId = '90016dcfeb054f969a096e8c0f30d42f';
$clientSecret = 'DHtiebq47WAhmyrD+udm6YGzqJgFlJz/14arVKJe1VWeQeEjy0';

$credentials = $clientId . ':' . $clientSecret;
$encodedCredentials = base64_encode($credentials);

$opts = array(
    'http' => array(
      'method' => 'GET',  // Replace with the appropriate HTTP method (e.g., GET, POST, PUT, DELETE)
      'header' => "Authorization: Basic $encodedCredentials\r\n" .
                  "Content-Type: application/json\r\n"  // Replace with the appropriate content type
    )
  );
  
  $context = stream_context_create($opts);
  $response = file_get_contents($url, false, $context);
  
  if ($response === false) {
    echo 'Failed to fetch the API.';
    exit;
  }
  
  $jsonData = json_decode($response);
  
  if ($jsonData === null) {
    echo 'Failed to decode the JSON data.';
    exit;
  }
  
  // Print the JSON response
  print_r($jsonData);
  
  $jsonFile = 'inc/data.json';  // Path to the JSON file where you want to save the data
  
  $fileSaved = file_put_contents($jsonFile, json_encode($jsonData));
  
  if ($fileSaved === false) {
    echo 'Failed to save the JSON data to a file.';
  } else {
    echo 'JSON data saved to file: ' . $jsonFile;
  }