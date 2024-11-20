import ThemeSwitcher from '../components/ThemeSwitcher';
import Navigation from "./Navigation";

const navItems = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Meals',
        href: '/meals',    
    },
    {
        label: 'Favorites',
        href: '/favorites',
    }
]
const Header = () => {
    return (
        <header className="header">
            <div className="header__container" style={{ borderBottom: '1px solid orange' }}>
                <Navigation navLinks={navItems} />
                <ThemeSwitcher />
            </div>
        </header>
    );
};

export {Header};