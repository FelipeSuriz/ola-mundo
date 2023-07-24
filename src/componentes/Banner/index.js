import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Felipe Suriz, estudante de Front-end. Aqui compartilho vários conhecimentos que aprendo durante os estudos, espero que gostem :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt='Foto de um circulo colorido'/>
                <img className={styles.minhaFoto} src={minhaFoto} alt='Foto do Felipe Suriz sorrindo'/>
            </div>
        </div>
    );
}