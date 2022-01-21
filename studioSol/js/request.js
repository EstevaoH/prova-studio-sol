
let numeroAPI;

function numeroAleatorio(){
    fetch('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300')
    .then(response =>{
            if(response.status < 300){
                return response.json();
            }
            throw(response.status)
            })
    .then((data) =>{
        console.log(data)
            if (data) {
             this.numeroAPI = data.value
            // console.log(this.numeroAPI);
            document.getElementById('resposta').innerHTML = data.value;
            }else{
            console.log('teste');
            document.getElementById('resposta').innerHTML = data.StatusCode;
            }
    }
    )
    .catch(err => {
        console.log('Error padrao', err);
        document.getElementById('display_mensagem_resultado').innerHTML =
        `   <span class="display_texto_erro">
            ERRO
            </span>
        `;

        document.getElementById('nova_partida').innerHTML = 
        `
        <button onclick="novaPartida()" class="display_button_recomecar" type="submit">NOVA PARTIDA</button>
        `
    })
    return numeroAPI;
}
// fransica silvera
// marta moreira
numeroAleatorio();

function compararNumero(){
    let numeroDigitado;
    this.numeroAPI.toString();
    // console.log('numero virou string', this.numeroAPI.toString())
    const formulario_display = document.getElementById('formulario');
    formulario_display.addEventListener('submit', (e)=>{
        e.preventDefault();
        numeroDigitado = e.target.querySelector('input').value;
        // console.log(e.target.querySelector('input').value);
        if (numeroDigitado == this.numeroAPI.toString()) {
            console.log('numeros iguais')
            document.getElementById('display_mensagem_resultado').innerHTML =
                `<span id="display_texto_acertou" class="display_texto_acerto">
                    Você acertou!!!
                </span>
                `
                document.getElementById('nova_partida').innerHTML = `
                <button onclick="novaPartida()" class="display_button_recomecar" type="submit">NOVA PARTIDA</button>
                `
        }else if (numeroDigitado > this.numeroAPI.toString()) {
            console.log(`numeor digitado ${numeroDigitado} é maior quer ${this.numeroAPI.toString()}`);
            document.getElementById('display_mensagem_dica').innerHTML =
        `   <span class="texto_dica">
            É maior 
            </span>
        `;
        }else if (numeroDigitado < this.numeroAPI.toString()) {
            console.log(`numeor digitado ${numeroDigitado} é menor quer ${this.numeroAPI.toString()}`);
            document.getElementById('display_mensagem_dica').innerHTML =
        `   <span class="texto_dica">
            É menor
            </span>
        `;
        }
    });
}

function novaPartida(){
    document.location.reload(true);
}


function exibirNumeroCentenas(){}
function exibirNumeroDezenas(){}
function exibirNumeroUnidades(){}