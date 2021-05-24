import React from 'react'
import {Switch} from 'react-router-dom';
import {Button} from 'fronton-react';
import {PlusIcon} from 'fronton-react';
import Layout from './Layout';
import Sidebar from './Sidebar';
import Header from './Header';

class LayoutWrapper extends React.Component {
    onCreateChordHandler = () => {
        console.log('create chord');
    }

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
                                kind="regular"
                                size="m"
                                variant="primary"
                                iconLeft={
                                    <PlusIcon />
                                }
                                onClick={this.onCreateChordHandler}
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
