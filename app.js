function mostrarResultado(){
  document.querySelector("#imagemMenina").style.display="none";
  document.querySelector("#textoMenina").style.display="none";
  document.querySelector("#resultadoMensagem").style.display="inline-block";
  document.querySelector("#botaoCopiar").style.display="inline-block";
}

function criptografar(){
  mostrarResultado()
  var textoInserido = document.getElementById('textoArea').value;
  var textoCriptografado = textoInserido
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
  document.getElementById('resultadoMensagem').value = textoCriptografado;
}

function descriptografar() {
  mostrarResultado()
  var textoInserido = document.getElementById('textoArea').value;
  var textoDescriptografado = textoInserido
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
  document.getElementById('resultadoMensagem').value = textoDescriptografado;
}