import style from './animation-logo.module.css'


const AnimationLogo = () => {
    return (
        <div className={style['logo-wrapper']}>
            <svg height="500" width="500" viewBox="0 0 500 500" className={style['logo']}>
                <defs>
                    <linearGradient id="mainGradient" x1="0.5" x2="0.5" y1=".7" y2="1">
                    <stop className={style['stop-left']} offset="0.5">
                    </stop>
                    <stop className={style['stop-right']} offset="1"></stop>
                    </linearGradient>
                </defs>
                <path className={style['logo__leaves-right']}
                    d="m425.23,165.88h-88.61l-50.59,86.47v58l72.65-124.29,64.79,110.47-108.42,185.56h-20.53l108.5-185.61-44.28-75.5-90.39,154.66v-127.96l58.2-99.5h129.45l-59.71,102-10.22-17.42,39.16-66.89Z"
                    fill="#fff"></path>
                <path className={style['logo__leaves-left']}
                    d="m113.93,232.77l-10.22,17.42-59.71-102h129.45s58.2,99.5,58.2,99.5v127.96s-90.39-154.66-90.39-154.66l-44.28,75.5,108.5,185.61h-20.53s-108.42-185.56-108.42-185.56l64.79-110.47,72.65,124.29v-58s-50.59-86.47-50.59-86.47h-88.61s39.16,66.89,39.16,66.89Z"
                    fill="#fff">

                </path>
                <path className={style['logo__flower']}
                    d="m250.01,186.01l44.13-75.77-43.96-75.21-44.28,75.5,44.12,75.48v35.04s-64.57-110.48-64.57-110.48L250.23.09l64.35,110.09-64.57,110.86v-35.04Z"
                    fill="#fff"></path>
                <rect height="1000" width="500" className={style['logo__rect']} fill="#fff"></rect>
                <path className={style['logo__letter']}
                    d="m124.11,284.77l10.22-17.42,115.78,197.69,115.56-197.41,10.22,17.42-125.77,214.86-126-215.14Z" fill="#fff">
                </path>
            </svg>
            <div className={style['logo-text']}>
                <h1>Ventura Lab</h1>
                <small>лабаратория красоты</small>
            </div>
        </div>
    )
}


export default AnimationLogo;