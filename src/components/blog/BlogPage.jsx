import React from 'react'
import styles from "./blogPage.module.css"
import Cardlist from '../cardlist/Cardlist'
import Menu from '../menu/Menu'

const BlogPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.catName}>
                Fashion
            </h1>
            <div className={styles.content}>
                <Cardlist />
                <Menu />
            </div>
        </div>
    )
}

export default BlogPage
