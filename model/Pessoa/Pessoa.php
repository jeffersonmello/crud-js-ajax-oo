<?php
class Pessoa {
  public $guid;
  public $nome;
  public $telefone;
  public $email;

  public function Pessoa(){
    echo $this->guid;
    echo $this->nome;
    echo $this->telefone;
    echo $this->email;
  }

  public function getPessoas($db){
    $res = $db->select('cad_pessoa');
    $res = $db->getResult();

    return $res;
  }
}

?>
