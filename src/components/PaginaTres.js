import { useState } from "react";
import { useForm } from "react-hook-form";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from "react-router-dom";

//import { inAxios } from "../config_axios";     

import Humana from "../../src/humana.gif"
import Robo from "../../src/Robo_2.gif"

const frm = document.querySelector("form")
const resp = document.querySelector("#resposta")

const url = "http://localhost:3001/executa"


const PaginaTres = () => {
    // register serve para definir os nomes dos campos do form (e validações)
    // handleSubmit, para indicar o método a ser acionado no evento onSubmit do form
    const { register, handleSubmit, reset } = useForm();

    const [aviso, setAviso] = useState("");

    //método chamado ao enviar o form (onSubmit)
    const enviar = async (e) => {
        e.preventDefault()
        try {
            const atribue = frm.inAtribue.value
            const atribue2 = frm.inAtribue2.value
            const saida = frm.inSaida.value

            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ atribue, atribue2, saida }) // body data type must match "Content-Type" header
            });
            return response.json();
            setAviso(`Ok!`);
        } catch (error) {
            setAviso(`Erro... ${error}`);
        }
        // setTimeout: executa o comando após o tempo indicado (em milissegundos)
        setTimeout(() => {
            setAviso("");
        }, 10000);
        // limpa os campos de formulário para uma nova inclusão
        reset({ inAtribue: "", inAtribue2: "", inSaida: "" });
    }

    return (
        <div className="container text-danger">
            <div className="row">
                <div className="col-12 mt-5 mb-3">
                    <ProgressBar now={10} label={`${10}%`} />
                </div>
            </div>

            <div className="row">
                <div className="col-6" style={{ display: "flex", justifyContent: "center" }}>
                    <img src={Humana} style={{ height: "150px", width: "135px" }} />
                    <img src={Robo} style={{ height: "150px", width: "135px" }} />
                </div>
            </div>

            <div className="row">
                <div className="col-6 align-self-center">
                    <div className="mt-3 col-10 mb-4 mr-1" >
                        <p className="fw-semibold" style={{ textAlign: "justify", color: "gray" }}>Augusta na sua infância sempre foi uma menina muito esperta, audaciosa e que poucos conseguiam compreender a facilidade que tinha de aprender sobre diversos temas. Augusta também gostava muito de exercícios físicos, amava praticar qualquer esporte com que sentisse minimamente desafiada, num dia como qualquer outro estava voltando pelo caminho que sempre faz depois de suas atividades Augusta tem uma sensação diferente, como se alguma coisa estivesse fora do lugar, uma vez que fazia o mesmo caminho todos os dias e sabia exatamente onde tudo deveria estar, sabia que o seu vizinho de longa data, Sr. Catarino, sempre buscava seu jornal exatamente às 10:00 da manhã pois era uma pessoa muito organizada em seus horários e por isso tinha pavor de estar fora do tempo, sabia que às 9:15 a Sra. Cândida levava seu cachorro Tobias para passear e até mesmo quando estava chovendo(ele ficava muito engraçado com a sua capinha de chuva…).</p>
                    </div>
                </div>

                <div className="col-6 align-self-center">
                    <br></br>
                    <h3 className="mb-3">Exemplo de Execução de Comandos</h3>
                    <h5 className="mb-4">Use o comando <b>const nomeVar = 10</b> para declarar e atribuir um valor para uma variável</h5>
                    <h5>Para exibir essa variável use o comando <b>console.log()...</b></h5>
                    <br></br>


                    <form onSubmit={handleSubmit(enviar)}>
                        <div className="form-group fw-semibold">
                            {/* <label htmlFor="atribue">Declare e atribua um valor a uma variável</label> */}
                            <input type="text" className="form-control" placeholder="Declare e atribua um valor a uma variável"
                                id="inAtribue" required autoFocus {...register("atribue")} />
                        </div>
                        <br></br>

                        <div className="form-group fw-semibold">
                            {/* <label htmlFor="atribue2">Declare e atribua um outro valor a uma outra variável</label> */}
                            <input type="text" className="form-control" placeholder="Declare e atribua um outro valor a uma outra variável"
                                id="inAtribue2" required {...register("atribue2")} />
                        </div>
                        <br></br>

                        <div className="form-group fw-semibold">
                            {/* <label htmlFor="saida">Exiba a soma dos conteúdos das variáveis</label> */}
                            <input type="text" className="form-control" placeholder="Imprima no console o conteúdo das variáveis"
                                id="inSaida" required {...register("saida")} />
                        </div>
                        <br></br>
                        <input type="submit" className="btn btn-primary mt-3" value="Enviar" />
                        <input type="reset" className="btn btn-danger mt-3 ms-3" value="Limpar" />
                    </form>

                    <h4 class="text-danger" id="resposta"></h4>
                    <div className={aviso.startsWith("Ok!") ? "alert alert-success" :
                        aviso.startsWith("Erro") ? "alert alert-danger" :
                            ""}>{aviso}
                    </div>
                </div>
            </div>

            {/* <div className="mt-3 col-12 mb-4 mr-1" >
                <input type="submit" className="btn btn-success" value="Seguinte" style={{ width: "100%" }} />
            </div> */}
            <div className="row">
                <div className="mt-5 mb-3 d-grid gap-2 col-12 mx-auto">
                        <Link to="/paginaquatro" className="btn btn-success">Seguinte</Link>
                </div>
            </div>


        </div>
    );
}

export default PaginaTres;