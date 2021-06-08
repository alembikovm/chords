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
                    <Sidebar/>
                </Layout.Sidebar>
                <Layout.Main>
                    {/*<Layout.Header>*/}
                    {/*    <Header>*/}
                    {/*        <Route path='/chords/main'>*/}
                    {/*            <ChordsHeader />*/}
                    {/*        </Route>*/}
                    {/*    </Header>*/}
                    {/*</Layout.Header>*/}
                    <Layout.Content>
                        {this.props.children}
                    </Layout.Content>
                </Layout.Main>
            </Layout>
        );
    }
}

export default LayoutWrapper;
