import React from 'react'
import {Link as ReactRouterLink} from 'react-router-dom';
import {Button} from 'fronton-react';
import {PlusIcon} from 'fronton-react';
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
                    <Layout.Header>
                        <Header>
                            <Button
                                as={ReactRouterLink}
                                to="/chords/main/create"
                                kind="regular"
                                size="m"
                                variant="primary"
                                iconLeft={
                                    <PlusIcon />
                                }
                            >
                                Создать связку
                            </Button>
                        </Header>
                    </Layout.Header>
                    <Layout.Content>
                        {this.props.children}
                    </Layout.Content>
                </Layout.Main>
            </Layout>
        );
    }
}

export default LayoutWrapper;
