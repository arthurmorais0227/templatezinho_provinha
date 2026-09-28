import Link from 'next/link';
import styles from './Card.module.css';

export default function Card({ verb, method, description, color, Icon, style }) {
    const href = method ? `/${String(method).toLowerCase()}` : '/';

    return (
        <Link
            href={href}
            className={styles.card}
            style={{ ...style, '--card-color': color }}>
            <div className={styles.cardHeader}>
                {Icon ? <Icon color={color} size={32} /> : null}
                <h2>
                    {verb} - {method || 'Home'}
                </h2>
            </div>
            <p>{description}</p>
        </Link>
    );
}