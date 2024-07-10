const textoEntrada = document.querySelector(".textoArea");
const botaoCriptografar = document.getElementById("botaoUm");
const botaoDescriptografar = document.getElementById("botaoDois");
const areaMensagem = document.querySelector(".areaMensagem");
let textoCriptografado = ""; 

// Função para exibir a mensagem criptografada/descriptografada
function exibirMensagem(mensagem) {
  areaMensagem.innerHTML = `
    <img src="imgs/High quality products 1 1.png" alt="menina observando com lupa" class="imagemMenina">
    <p class="textoMenina">
      ${mensagem ? `<span class="negritoFrase">${mensagem}</span>` : 
                    `<span class="negritoFrase">Nenhuma mensagem<br> encontrada</span><br><br> Digite um texto que você deseja criptografar ou descriptografar.`
      }
    </p>
  `;

  // Adiciona o botão "Copiar" se houver mensagem
  if (mensagem) {
    const botaoCopiar = document.createElement("button");
    botaoCopiar.textContent = "Copiar";
    botaoCopiar.addEventListener("click", () => {
      navigator.clipboard.writeText(mensagem)
        .then(() => {
          alert("Texto copiado!");
        })
        .catch(err => {
          console.error("Erro ao copiar:", err);
        });
    });
    areaMensagem.appendChild(botaoCopiar);
    botaoCopiar.classList.add("botao-copiar"); 
  }
}

// Função para criptografar
function criptografar() {
  // Lógica de validação e criptografia
  const texto = textoEntrada.value;
  // ... (Implemente a validação e a criptografia aqui) ...
  
  exibirMensagem(textoCriptografado);
}

// Função para descriptografar
function descriptografar() {
  // Lógica de validação e descriptografia
  const texto = textoEntrada.value;
  // ... (Implemente a validação e a descriptografia aqui) ...

  exibirMensagem(textoCriptografado);
}

// Event listeners para os botões
botaoCriptografar.addEventListener("click", criptografar);
botaoDescriptografar.addEventListener("click", descriptografar);

// Exibe a mensagem inicial (vazia)
exibirMensagem(""); 
// ... (código anterior) ...

function criptografar() {
    const texto = textoEntrada.value;
    if (validarTexto(texto)) { // Valida o texto antes de criptografar
      textoCriptografado = texto
        .toLowerCase()
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
      exibirMensagem(textoCriptografado);
    } else {
      exibirMensagem(""); // Mantém a mensagem padrão se o texto for inválido
    }
  }
  
  function descriptografar() {
    const texto = textoEntrada.value;
    if (validarTexto(texto)) { // Valida o texto antes de descriptografar
      textoCriptografado = texto
        .toLowerCase()
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
      exibirMensagem(textoCriptografado);
    } else {
      exibirMensagem(""); // Mantém a mensagem padrão se o texto for inválido
    }
  }
  
  // Função de validação (apenas letras minúsculas e espaços)
  function validarTexto(texto) {
    return /^[a-z\s]+$/.test(texto);
  }
  

  