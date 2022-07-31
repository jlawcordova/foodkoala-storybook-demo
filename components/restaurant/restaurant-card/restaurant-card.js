import styles from './restaurant-card.module.css'
import Link from 'next/link';

export default function RestaurantCard(props) {
    return (
        <Link href="/restaurant">
            <a className={styles.card}>
              <img src={props.image}></img>
              <h2>{props.name}</h2>
              <p>{props.description}</p>
            </a>
        </Link>
    );
}