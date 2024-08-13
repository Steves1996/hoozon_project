<?php

require '../inc/dbcon.php';

function generateRandomString($length = 8) {
    $characters = '0123456789abcdefghijklmnopqrs092u3tuvwxyzaskdhfhf9882323ABCDEFGHIJKLMNksadf9044OPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function storeUser($customerInput) {
    global $conn;

    $orderId = mysqli_real_escape_string($conn, $customerInput['id']);
    $createdDateOrder = mysqli_real_escape_string($conn, $customerInput['date_created']);
    $customerId = mysqli_real_escape_string($conn, $customerInput['customer_id']);
    $firstName = mysqli_real_escape_string($conn, $customerInput['billing']['first_name']);
    $lastName = mysqli_real_escape_string($conn, $customerInput['billing']['last_name']);
    $address = mysqli_real_escape_string($conn, $customerInput['billing']['address_1']);
    $city = mysqli_real_escape_string($conn, $customerInput['billing']['city']);
    $country = mysqli_real_escape_string($conn, $customerInput['billing']['country']);
    $phone = mysqli_real_escape_string($conn, $customerInput['billing']['phone']);
    $paymentMethode = mysqli_real_escape_string($conn, $customerInput['payment_method_title']);
    $email = mysqli_real_escape_string($conn, $customerInput['billing']['email']);
    $offerType = mysqli_real_escape_string($conn, $customerInput['line_items'][0]['name']);
    $amount = mysqli_real_escape_string($conn, $customerInput['line_items'][0]['total']);
    $password = mysqli_real_escape_string($conn, generateRandomString(8));
    $code = mysqli_real_escape_string($conn, '0000000000');

    $userExist = getUser($customerInput);
    $query = " INSERT INTO users (firstName, email, password, resetCode) VALUES ('$firstName', '$email', '$password', '$code');";
    $result = mysqli_query($conn, $query);

    if($result){
        $data = [
            'status' =>201,
            'message' =>'User create successfully'
        ];
        return json_encode($data);
    }else{
        $data = [
            'status' =>500,
            'message' =>'Internal server Error',
        ];
        header("HTTP/1.0 500 Internal server Error");
        return json_encode($data);
    }
    
}




function getUserList() {

    global $conn;

    $query = "SELECT * FROM users";
    $query_run = mysqli_query($conn, $query);

    if($query_run){
        if(mysqli_num_rows($query_run)>0){
        $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC);
        $data = [
            'status' =>200,
            'message' =>'User list completed successfully',
            'data' =>$res
        ];
        header("HTTP/1.0 200 Ok");
        return json_encode($data);
        }else{
            $data = [
                'status' =>404,
                'message' =>'No user Found'
            ];
            header("HTTP/1.0 500 No user Found");
            return json_encode($data);
        }
    }else{
        $data = [
            'status' =>500,
            'message' =>'Internal server Error',
        ];
        header("HTTP/1.0 500 Internal server Error");
        return json_encode($data);
    }
}

function getUser($userParam){
    
    global $conn;

    $customerId =  mysqli_real_escape_string($conn, $userParam['customer_id']);
    $email =  mysqli_real_escape_string($conn, $userParam['billing']['email']);
    $phone =  mysqli_real_escape_string($conn, $userParam['billing']['phone']);
    $query = "SELECT * FROM user WHERE customerId='$customerId' AND email='$email' AND phone = '$phone'  LIMIT 1";
    $result = mysqli_query($conn, $query);

    if($result){
         if(mysqli_num_rows($result) == 1){
            $res = mysqli_fetch_assoc($result);
            $data = [
                'status' =>200,
                'message' =>'User list completed successfully',
                'data' =>$res
            ];
            header("HTTP/1.0 200 Ok");
            return json_encode($data);
         }else{
            $data = [
                'status' =>404,
                'message' =>'No user Found'
            ];
            header("HTTP/1.0 500 No user Found");
            return json_encode($data);
         }
    }else{
        $data = [
            'status' =>500,
            'message' =>'Internal server Error',
        ];
        header("HTTP/1.0 500 Internal server Error");
        return json_encode($data);
    }
}

?>