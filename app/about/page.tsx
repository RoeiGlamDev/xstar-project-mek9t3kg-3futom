import React from 'react';
import styles from './about.module.css'; // Assuming you have a CSS module for styles

const AboutPage: React.FC = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.title}>Welcome to GlamCS</h1>
            <p className={styles.description}>
                At GlamCS, we believe in the power of beauty and elegance. Our high-end cosmetics are crafted to enhance your natural beauty, with luxurious 3D designs that captivate and inspire.
            </p>
            <div className={styles.imageContainer}>
                <img src="/images/luxury-cosmetics.png" alt="Luxury Cosmetics" className={styles.luxuryImage} />
            </div>
            <h2 className={styles.subTitle}>Our Philosophy</h2>
            <p className={styles.philosophy}>
                We are dedicated to providing premium products that not only look good but also feel good. Our commitment to quality ensures that every product meets the highest standards of excellence.
            </p>
        </div>
    );
};

export default AboutPage;