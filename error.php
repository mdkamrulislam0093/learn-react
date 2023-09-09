<?php
Plugin Name: PHP Error filter
error_reporting(E_ALL & ~E_WARNING & ~E_DEPRECATED & ~E_USER_DEPRECATED & ~E_NOTICE);
