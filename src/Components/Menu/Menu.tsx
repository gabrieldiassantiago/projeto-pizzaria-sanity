import styles from './Menu.module.scss';

import Item from './Item';

const Menu = ({menu}) => {    
    const menuRender = menu.map((item) => (
        <Item
        key={item._id}
        recipe={item.recipe}
        ingredients={item.ingredients}
        price={item.price}
      />
    ));
    return (
        <section className={styles['menu-wrapper']}>
            <div className={styles.menu}>
                <h2 className='gold'>Menu</h2>
                <ul className={styles.list}> {menuRender}
                </ul>
            </div>
        </section>
    )
}
export default Menu