import React from "react";
import s from "./Paginator.module.css";

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.paginator__wrapper}>
            {pages.map(p => {
                if (p === props.currentPage - 4) {
                    return (
                        <span key={p}>
                                <span
                                    className={s.paginator}
                                    onClick={(e) => props.onPageChanged(p)}
                                >1</span>
                                <span>...</span>
                            </span>
                    )
                }
                if (p < props.currentPage - 4) {
                    return null
                }
                if (p === props.currentPage + 4) {
                    return <span key={p}> ... из {props.totalCount}</span>
                }
                if (p > props.currentPage + 4) {
                    return null
                }

                return (
                    <span
                        key={p}
                        onClick={(e) => props.onPageChanged(p)}
                        className={`${props.currentPage === p ? s.paginatorActive : ''} ${s.paginator}`}>
                                {p}
                    </span>
                );
            })
            }
        </div>
    );
}

export default Paginator