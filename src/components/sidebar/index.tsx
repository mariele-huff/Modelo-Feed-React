import styles from './index.module.css';



export function Sidebar() {
    return (
        <aside className={styles.Sidebar}>
            <img />
            <img className={styles.cover} src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/mariele-huff.png" />
                <div className={styles.description}>
                    <strong>Mariele Huff</strong>
                    <span>Aluna Crie-TI - Univates | Java | Javascript | SQL | HTML | CSS</span>
                </div>
            </div>
        </aside>
    )
}