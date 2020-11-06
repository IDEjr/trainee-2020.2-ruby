import React from 'react'
import '../estilo/HelpSstyle.css'

function HelpSection(){
    return (
        <section id="help">
          <div class="corpo">
            <div class="text">
              <h3>Como ser um padrinho</h3>
              <div id="title-underline"></div>
              <p>Você adora animais de estimação, mas não pode ter um em casa? Faça como a nossa madrinha Paolla Oliveira! Seja madrinha ou padrinho de um pet e receba informações e fotos do seu afilhado por e-mail! Quando tiver um tempo livre, visite-o também. Com R$ 100/ mês você ajuda nos custos fixos com vacinas, ração e consultas de rotina. Para ser padrinho ou madrinha de um animalzinho, preencha esse formulário abaixo:</p>
              <div id="caixadocs">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwTfjK8BAIpfkDBcyGsPrlvTuDxsoZFN_LvcyGeUA7tjj0Ww/viewform">Formulário</a>
              </div>
              <h4>Não quer ser padrinho? Saiba como ajudar de outras formas:</h4>
              <div id="caixahelp">
                <a href="">PáginaHelp</a>
              </div>
            </div>
            <div class="imgdog">
              <img src=".\c1.jpg" alt="" />
            </div>
          </div>
        </section>
    );
}

export default HelpSection