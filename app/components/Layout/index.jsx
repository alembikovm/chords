import React from 'react'
import {Grid, GridItem} from 'fronton-react';
import Layout from './Layout';
import Sidebar from './Sidebar';

class LayoutWrapper extends React.Component {
    render() {
        return (
            <Layout
                areas={['aside main']}
                columns='250px 1fr'
                gap='space-150'
            >
                <GridItem area='aside'>
                    <Sidebar />
                </GridItem>
                <GridItem area='main'>
                    {this.props.children}
                </GridItem>
            </Layout>
        );
    }
}

export default LayoutWrapper;
