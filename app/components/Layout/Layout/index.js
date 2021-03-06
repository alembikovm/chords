import styled from 'styled-components';
import {Layout as LayoutFronton} from "fronton-react";
import Content from './Content';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

const Layout = styled(LayoutFronton)`
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-column-gap: 12px;
  background-color: #F2F3F5;
`;

Layout.Content = Content;
Layout.Header = Header;
Layout.Main = Main;
Layout.Sidebar = Sidebar;

export default Layout;
