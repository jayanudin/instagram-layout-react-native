import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Container, Content, Icon } from 'native-base'

import CardComponent from '../CardComponent'

export default class HomeTab extends React.Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <CardComponent imageSource="1" likes="101" />
                    <CardComponent imageSource="2" likes="102" />
                    <CardComponent imageSource="3" likes="103" />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff' 
    },
});