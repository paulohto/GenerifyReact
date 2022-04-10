import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';


function AccordionFaq (){
    return (
    <div>

        <div style={{padding: "100px 0px 40px 125px", margin: "0px 0px 0px 0px"}}>
            <b  className="main-font" style={{color:"#10002b"}}>Generi - Faq</b>
        </div>

        <div class="accordion" id="accordionExample" style={{paddingRight: "125px", paddingLeft: "125px", paddingBottom: "100px", marginTop: "0px"}}>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Como criar uma conta?
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>Sua conta conosco é gratuita!</strong> Basta clicar no link de <a href="#">cadastro</a> e submeter o formulário com todos os campos obrigatórios preenchidos.
                Você receberá um email de validação da conta. Após do link de confirmação no email, sua conta estará pronta para uso!
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Como encontrar uma música?
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>Os maiores artistas estão no nosso player.</strong> Para encontrar suas músicas preferidas, basta fazer o <a href="#">login</a> com sua conta de cadastro,
                clicar na barra de busca e então pesquisar por artista, música ou álbum.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Posso remover as propagandas?
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>Use o Generify&trade; do seu jeito.</strong> Através do nosso plano de assinaturas, você pode criar diversas playlists, remover as propagandas e muito mais.
                Para acessar as opções de plano, acesse <a href="#">Minha Conta</a> na área logada.
            </div>

            <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Free</th>
                    <th scope="col">Individual</th>
                    <th scope="col">Familia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>R$ 0,00</td>
                    <td>R$ 9,99</td>
                    <td>R$ 29,99</td>
                  </tr>
                  <tr>
                    <td>R$ 0,00</td>
                    <td>R$ 9,99</td>
                    <td>R$ 29,99</td>
                  </tr>
                </tbody>
              </table>

            </div>
            
        </div>
        </div>
    </div>

    );
}

export default AccordionFaq;