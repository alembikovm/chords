import React from 'react'
import {Switch} from 'react-router-dom';
import Layout from './Layout';
import Sidebar from './Sidebar';
import Header from './Header';
import {Button} from '../common';

class LayoutWrapper extends React.Component {
    render() {
        console.log(this.props.children);

        return (
            <Layout>
                <Layout.Sidebar>
                    <Sidebar/>
                </Layout.Sidebar>
                <Layout.Main>
                    <Layout.Header>
                        <Header>
                            <Button onClick={() => console.log('click!')}>
                                Создать связку
                            </Button>
                        </Header>
                    </Layout.Header>
                    <Layout.Content>
                        <Switch>
                            {this.props.children}
                        </Switch>
                    </Layout.Content>
                </Layout.Main>
            </Layout>
        );
    }
}

export default LayoutWrapper;
