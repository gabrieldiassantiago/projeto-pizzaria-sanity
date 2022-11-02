import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
            <div className={styles.main}>
                <a href="">
                    IMAGEM
                </a>
                <h3>Algum texto sobre o site DUCCA MASAS</h3>
                <ul>
                    <li>
                        <a href="">Instagram</a>
                    </li>
                    <li>
                        <a href="">Facebook</a>
                    </li>
                    <li>
                        <a href="">Linkedin</a>
                    </li>
                </ul>
            </div>
            <div className={styles.links}></div>
            <h2>Links</h2>
            <ul>
                <li>
                    <a href="">Link 1</a>
                </li>
                <li>
                    <a href="">Link 2</a>
                </li>
                <li>
                    <a href="">Link 3</a>
                </li>
            </ul>
            <div className={styles.contato}>
                <h2>Contato</h2>
                <ul>
                    <li>
                        <a href="">Contato</a>
                    </li>
                </ul>
            </div>
            </div>
            <div className={styles.bottom}>
                <p>DUCCA Massas - Todos direitos reservados</p>
            </div>
        </footer>
    )
}
export default Footer