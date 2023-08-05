<?php
$con = mysqli_connect("localhost", "root", "", "toko_online");

//check connection
if (mysqli_connect_errno()) {
    echo "Gagal menghubungkan ke database: " . mysqli_connect_error();
    exit();
}
