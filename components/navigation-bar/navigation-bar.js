import styles from './navigation-bar.module.css'
import Link from 'next/link';

export default function NavigationBar(props) {
    return (
        <nav className={styles.navigation}>
            <Link href="/">
                <a>
                    <p>
                        <img className={styles.logo} src="/koala.png"></img>
                        <span  className={styles.title}>foodkoala</span>
                    </p>
                </a>
            </Link>
        </nav>
    );
}