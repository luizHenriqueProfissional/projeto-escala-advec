import styles from  './home.module.css'
import Familia from './assets/conf-familia.png'
import Jovens from './assets/Jovens.jpg'
import Homens from './assets/Homens.avif'
import Mulheres from './assets//Mulheres.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import { RiEqualFill } from "react-icons/ri";
function Home () {
    return(
        <div className={styles.menu_home}>
            <main className={styles.main_conferencias}>
                <h1>Eventos</h1>
                <section className={styles.conferencias}>
                    <h2>Conferência da familia</h2>
                    <div className={styles.div_seta}>
                    <FaArrowRightLong />
                    </div>
                    <div className={styles.divisoria}>
                        <h3>Culto especifico para:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit omnis harum nihil voluptatibus </p>
                    </div>
                    <div className={styles.div_seta}>
                    <RiEqualFill />
                    </div>
                        <img src={Familia} alt="" />
                </section>
                <section className={styles.conferencias}>
                    <h2>Conferência dos Jovens e Adolecentes</h2>
                    <div className={styles.div_seta}>
                    <FaArrowRightLong />
                    </div>
                    <div className={styles.divisoria}>
                        <h3>Culto especifico para:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit omnis harum nihil voluptatibus </p>
                    </div>
                    <div className={styles.div_seta}>
                    <RiEqualFill />
                    </div>
                        <img src={Jovens} alt="" />
                </section>
                <section className={styles.conferencias}>
                    <h2>Conferência dos Homens Vencedores</h2>
                    <div className={styles.div_seta}>
                    <FaArrowRightLong />
                    </div>
                    <div className={styles.divisoria}>
                        <h3>Culto especifico para:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit omnis harum nihil voluptatibus </p>
                    </div>
                    <div className={styles.div_seta}>
                    <RiEqualFill />
                    </div>
                        <img src={Homens} alt="" />
                </section>
                <section className={styles.conferencias}>
                    <h2>Conferência das Mulheres Vitoriosas</h2>
                    <div className={styles.div_seta}>
                    <FaArrowRightLong />
                    </div>
                    <div className={styles.divisoria}>
                        <h3>Culto especifico para:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit omnis harum nihil voluptatibus </p>
                    </div>
                    <div className={styles.div_seta}>
                    <RiEqualFill />
                    </div>
                        <img src={Mulheres} alt="" />
                </section>
            </main>
        </div>
    )
}
export default Home;