import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoMenuSharp } from 'react-icons/io5';
import { ThemeContext } from '../../App';

import {
  StyledNav,
  NavLogo,
  NavIcon,
  LinkContainer,
  StyledLink,
  LinkIcon,
  LinkLabel,
  NavHeader,
  Lang,
} from './StyledNav';
import NavData from './NavData';
import Switch from '../Switch/Switch';
import { SubtleButton } from '../Button/Button';

function Navbar() {
  const { t, i18n } = useTranslation();
  const { setTheme, theme } = useContext(ThemeContext);
  const [collapsed, setCollapsed] = useState(true);
  const { pathname } = useLocation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  const handleSwitch = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <StyledNav collapsed={collapsed}>
      <main>
        <NavHeader>
          <NavLogo>
            <img
              src="https://assets-global.website-files.com/5e91d43b06600f5f9fd0919f/5e91d5d0b1f82c1c03f8dd63_tribal%20-%20logo%20-%20horizontal%20-%202C%20-%20white.png"
              alt="Tribal Logo"
            />
          </NavLogo>
          <NavIcon type="button" onClick={() => setCollapsed(!collapsed)}>
            <IoMenuSharp />
          </NavIcon>
        </NavHeader>

        <div>
          {NavData.map(({ label, icon, to }) => {
            return (
              <LinkContainer key={label} isActive={pathname.includes(to)}>
                <StyledLink to={to}>
                  <LinkIcon>{icon}</LinkIcon>
                  <LinkLabel>{t(`components.navBar.labels.${label}`)}</LinkLabel>
                </StyledLink>
              </LinkContainer>
            );
          })}
        </div>
      </main>
      <footer>
        <Lang>
          <SubtleButton onClick={() => changeLanguage('es')} type="button">
            {t('components.navBar.spanish')}
          </SubtleButton>
          <SubtleButton onClick={() => changeLanguage('en')} type="button">
            {t('components.navBar.english')}
          </SubtleButton>
        </Lang>
        <Switch isActive={theme === 'dark'} handleSwitch={handleSwitch} />
      </footer>
    </StyledNav>
  );
}
export default Navbar;
