import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'
const Pagination = ({ currenPage, onChangePage }) => {

    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(e) => onChangePage(e.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={currenPage}
            renderOnZeroPageCount={null}
        />
    )
}
export default Pagination