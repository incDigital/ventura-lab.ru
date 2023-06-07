import style from './location-navigation.module.css'

const LocationNavigation = () => {
    return (
        <nav className={style['navigation']}>
            <a href="#" className={style['navigation__link']}>Женский зал</a>
            <div className={style['navigation__sep']}></div>
            <a href="#" className={style['navigation__link']}>Мужской зал</a>
            <div className={style['navigation__sep']}></div>
            <a href="#" className={style['navigation__link']}>Детский зал</a>
        </nav>
    )
}

export default LocationNavigation