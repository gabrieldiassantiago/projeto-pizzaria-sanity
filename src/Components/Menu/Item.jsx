import styles from './Item.module.scss';

const Item = ({recipe, ingredients, price}) => {
    
    return (
        <li className={styles.item}>
                        <div className={styles.content}>
                            <h2>{recipe}</h2>
                            <h4>{ingredients}</h4>
                        </div>
                        <div className={styles.divisor}></div>
                        <h5>{price}</h5>
                    </li>
    )
}

export default Item