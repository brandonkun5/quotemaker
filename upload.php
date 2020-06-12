<?php

var_dump($_FILES);

foreach ($_FILES["myFiles"]["tmp_name"] as $key => $value) {
    $targetPath = "uploads/" . basename($_FILES["myfiles"]["name"][$key]);
    move_uploaded_file($value, $targetPath);
}