import React from 'react'

import styles from './NotFoundBlock.module.scss'
console.log(styles);
const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1 ><span>😌 </span> <br />
                Nothing to show</h1>
        </div>


    )
}
export default NotFoundBlock
