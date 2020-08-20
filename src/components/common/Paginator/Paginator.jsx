import React, {useState} from "react";
import s from "./Paginator.module.css";

const Paginator = ({totalCount, pageSize, portionSize=10, onPageChanged, currentPage}) => {

    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={s.paginator__wrapper}>
            {
                portionNumber > 1 &&
                <button className={s.paginator__button} onClick={() => setPortionNumber(portionNumber - 1) }>Назад</button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span
                        key={p}
                        onClick={(e) => onPageChanged(p)}
                        className={`${currentPage === p ? s.paginatorActive : ''} ${s.paginator}`}>
                        {p}
                    </span>
                })}
            {
                portionNumber < pagesCount &&
                <button className={s.paginator__button} onClick={() => setPortionNumber(portionNumber + 1) }>Вперед</button>
            }

        </div>

        /*<div className={s.paginator__wrapper}>
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
        </div>*/
    );
}

export default Paginator