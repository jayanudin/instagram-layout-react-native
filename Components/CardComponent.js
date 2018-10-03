import React from 'react';
import { StyleSheet, FlatList, Text, View, Image } from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Content, Spinner, Right, Button, Icon } from 'native-base'


export default class CardComponent extends React.Component { 

    constructor(props){
        super(props);
        this.state = { isLoading: true, articles: []}
        this.fetchNews = this.fetchNews.bind(this);
    }

    async getNews() {

        const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=589205a3e50e4f57ab6c56133f8fb08d';
        let result = await fetch(url).then(response => response.json());
        return result.articles;
       
    }

    fetchNews() {
        this.getNews()
          .then(articles => this.setState({ articles, refreshing: false }))
          .catch(() => this.setState({ refreshing: false }));
    }
    

    componentDidMount(){
        this.fetchNews();
    }

    render() {

        let element = [];

        this.state.articles.map((item) => {
            element.push(
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../assets/me.png')} />
                            <Body>
                                <Text>{ item.title }</Text>
                                <Text note>Jan 15, 2018</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{uri: item.urlToImage}}
                            style={{ height: 200, width: null, flex: 1 }}
                        />
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                                <Text style={{ fontWeight: '900' }}>
                                    { this.author }
                                </Text>
                                    { this.description }
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            );
        });

        return (
            
            <Content>
                { element }
            </Content>
           
        );

       
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
