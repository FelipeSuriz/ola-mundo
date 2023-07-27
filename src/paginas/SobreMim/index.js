import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Felipe!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Felipe Suriz dando gargalhada"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Olá! Tudo bem? Sou um estudante de Front-end, Bacharel em Administração, atualmente cursando Análise e Desenvolvimento de Sistemas (ADS) na Uniritter e fazendo cursos na Alura. É um prazer te receber por aqui!
            </p>

            <p className={styles.paragrafo}>
                Minha jornada com a programação começou com uma curiosidade imensa em entrar no mundo da tecnologia. Desde criança, sempre me fascinei em entender os bastidores de jogos e sistemas, buscando compreender como funcionava a movimentação dos personagens nos jogos ou como era feito um depósito em um caixa eletrônico. Inicialmente, era apenas um hobby, mas tudo mudou quando um amigo me incentivou a fazer uma formação para iniciantes em programação na Alura. Foi nessa formação que realmente despertei para a programação, aprendendo sobre lógica de programação, HTML, CSS e um pouco de JavaScript. Em seguida, me aprofundei ainda mais em JavaScript, descobrindo posteriormente o TypeScript, uma extensão mais robusta e escalável do JS, e me dediquei a aprender mais sobre ele.
            </p>

            <p className={styles.paragrafo}>
                Atualmente, estou estudando uma formação no framework React, e este projeto está relacionado a esse estudo. Além disso, tenho alguma experiência com Java e PHP, embora meu conhecimento nessas linguagens não seja muito profundo. O estudo de programação me encanta, e o sonho de trabalhar na área está cada vez mais próximo.
            </p>

            <p className={styles.paragrafo}>
                A escolha do curso de ADS tem me deixado muito satisfeito. Ele me proporciona uma visão teórica e aprofundada de como as coisas acontecem no mundo da programação. Estou no 2º semestre do curso, e esse momento de aprendizado tem sido incrível.
            </p>

            <p className={styles.paragrafo}>
                Juntando os cursos da Alura com o conhecimento adquirido na Faculdade de ADS, estou consolidando minha experiência como desenvolvedor, criando projetos e aplicando novos conhecimentos, com o objetivo de me preparar para o dia a dia de um programador.
            </p>

            <p className={styles.paragrafo}>
                Mesmo trabalhando de forma independente e sem a pressão dos prazos de implementação, eu me desafio, estipulando datas para a "entrega" dos projetos e codando todos os dias, para estar preparado quando surgir uma oportunidade.</p>

            <p className={styles.paragrafo}>
                Desde que entrei no mundo da tecnologia, tenho vivenciado uma jornada de aprendizado contínuo. A Alura é uma escola maravilhosa (recomendo mesmo, rsrs), e o curso de ADS me proporcionou uma base sólida para compreender os conceitos por trás do código. Hoje, sinto-me realizado ao entender alguns dos vários conceitos que estão presentes nas movimentações dos personagens e no processo de realização de um depósito no caixa do banco. A oportunidade de aprender esses conteúdos ricos e complexos é verdadeiramente encantadora.
            </p>
        </PostModelo>
    );
}