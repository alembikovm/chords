import React from 'react'
import {Route} from 'react-router-dom';
import ChordsHeader from '../modules/chords/components/ChordsHeader';
import Layout from './Layout';
import Sidebar from './Sidebar';
import Header from './Header';

class LayoutWrapper extends React.Component {
    render() {
        return (
            <Layout>
                <Layout.Sidebar>
                    <Sidebar />
                </Layout.Sidebar>
                <Layout.Main>
                    {this.props.children}
                </Layout.Main>
            </Layout>
        );
    }
}

export default LayoutWrapper;
