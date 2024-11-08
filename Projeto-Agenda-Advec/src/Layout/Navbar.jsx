import { Link } from "react-router-dom"
import styles from './navbar.module.css'
import { TfiHome } from "react-icons/tfi";
import { AiOutlineFire } from "react-icons/ai";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
function Navbar() {
    return (
        <ul className={styles.menu}>
            <li className={styles.menu_links_home}><TfiHome /> <Link to="/">Home</Link></li>
            <li className={styles.menu_links_cultos}><AiOutlineFire /> <Link to="/cultos">Cultos</Link></li>
            <li className={styles.menu_links_escala}><AiOutlineAppstoreAdd /><Link to="/escala">Escala</Link></li>
        </ul>
    )
}
export default Navbar