// import { Fragment } from "react";
import { Link } from "react-router-dom";

import Humana from "../../src/humana.gif"
import Robo from "../../src/Robo_2.gif"

const PaginaInicial = () => {
    return (
        <div className="container" style={{ width: "65%" }}>
            <div className="row">
                <div className="align-self-center">
                    <div className="mt-3 mb-8" >
                        <p className="mt-5 fw-semibold fs-4" style={{ textAlign: "justify", color: "red" }}>Bem-vindos à Computação Afetiva!</p>
                        <p className="mt-5 fw-semibold" style={{ textAlign: "justify", color: "gray" }}>Esta ferramenta/software/aplicação/jogo foi desenvolvida com o objetivo de auxiliar os estudantes da disciplina de Algoritmos e Lógica da Programação a potencializar os seus estudos, 
                            tornando o aprendizado mais atrativo, leve e divertido. Durante o uso desta aplicação você irá acompanhar a história de Augusta e a descoberta de um Robô, e seus vários desdobramentos.</p>
                        <p className="mt-3 fs-5 fw-bold" style={{ textAlign: "center", color: "gray" }}> Parte I</p>
                        <p className="mt-3 fw-semibold" style={{ textAlign: "justify", color: "gray" }}>Augusta na sua infância sempre foi uma menina muito esperta, audaciosa e que poucos conseguiam compreender a facilidade que tinha de aprender sobre diversos temas. Augusta também gostava muito de exercícios físicos, amava praticar qualquer esporte com que sentisse minimamente desafiada, 
                            num dia como qualquer outro estava voltando pelo caminho que sempre faz depois de suas atividades Augusta tem uma sensação diferente, como se alguma coisa estivesse fora do lugar, uma vez que fazia o mesmo caminho todos os dias e sabia exatamente onde tudo deveria estar, sabia que o seu vizinho de longa data, Sr. Catarino, sempre buscava seu jornal 
                            exatamente às 10:00 da manhã pois era uma pessoa muito organizada em seus horários e por isso tinha pavor de estar fora do tempo, sabia que às 9:15 a Sra. Cândida levava seu cachorro Tobias para passear e até mesmo quando estava chovendo(ele ficava muito engraçado com a sua capinha de chuva…). Ainda inquieta com a sensação, decide retornar pelo caminho que havia feito.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12" style={{display: "flex", justifyContent: "center"}}>
                        <img src={Humana} style={{height: "150px", width: "135px"}} />
                        <img src={Robo} style={{height: "150px", width: "135px"}} />
                </div>
            </div>

            <div className="row">
                <div className="mt-5 mb-3 d-grid gap-2 col-6 mx-auto">
                            {/* <button type="button" className="btn btn-success" style={{ margin: "50px 5px" }}><Link to="/paginatres" className="btn btn-success btn-lg">Iniciar</Link></button> */}
                            <Link to="/paginatres" className="btn btn-success btn-lg">Iniciar</Link>
                </div>
            </div>

        </div>

    );
}

export default PaginaInicial;