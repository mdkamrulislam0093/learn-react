<?php 

$re = '/01/';
$str = '100110120';

preg_match_all($re, $str, $matches, PREG_SET_ORDER, 0);

echo "<pre>";
// Print the entire match result
var_dump(end($matches));
echo "</pre>";
