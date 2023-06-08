import style from './hamburger.module.css' 


const Hamburger = () => {
    return (
        <div className={style["hamburger"]}>
            <div className={style["hamburger__text"]}>mеню</div>
            <div className={`${style["hamburger__line"]} ${style["hamburger__line_small"]}`}></div>
            <div className={style["hamburger__line"]}></div>
        </div>
    )
}

export default Hamburger;