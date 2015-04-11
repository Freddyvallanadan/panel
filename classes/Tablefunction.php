<?php 
class Tablefunction{
private $usertable="user";
private $post_table="posts";
public function getUsertable(){
	return $this->$usertable;
}
public function getPosttable(){
	return $this->$post_table;
}
}