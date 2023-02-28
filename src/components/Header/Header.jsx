import style from '../Header/Header.module.css'


const Header = () => {
    const items = [
        {
            label: 'Test1',
            to: '/1',
            icone: ''
        },
        {
            label: 'Test2',
            to: '/2',
            icone: ''
        },
        {
            label: 'Test3',
            to: '/3',
            icone: ''
        },
        {
            label: 'Test4',
            to: '/4',
            icone: ''
        },
        {
            label: 'Test5',
            to: '/5',
            icone: ''
        },
        {
            label: 'Test6',
            to: '/6',
            icone: ''
        },
        {
            label: 'Test7',
            to: '/7',
            icone: ''
        },
        {
            label: 'Test8',
            to: '/8',
            icone: ''
        },
    ]

    const goTo = (to) => {
        console.log(to);
    }
    return (
        <div>
            <div className={style.logoContainer} >
                <img className={style.logo} alt='logo' src="logo3.png" />
            </div>
            <div className={style.headrComponent}>
                {items.map(item => (

                    <div className={style.headerLabel} key={item.to} onClick={() => { goTo(item.to) }}>
                        {item.label}
                    </div>
                ))}

                ddd

            </div>
        </div>
    );

}


export default Header
