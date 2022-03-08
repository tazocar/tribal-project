import PropTypes from 'prop-types';
import { StyledLayout, Main } from './StyledLayout';
import Navbar from '../components/Navbar/Navbar';

function Layout({ children }) {
  return (
    <StyledLayout>
      <Navbar />
      <Main>{children}</Main>
    </StyledLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
