import React from "react";
import { Component } from "react";
import { Text, ScrollView, StyleSheet, View } from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return(
            <ScrollView>
                <Text style={styles.textStyle}>
                Welcome to my app! This is a collection of all of my past, present, and future projects and serves as a centralized “portfolio” of my abilities and creativity! This collection is not all, but a majority of my current work and will be the location for all future projects. Follow me on Instagram @workwitweezle for more content and please use the contact page to keep in touch and inquire about my services!
                </Text>
                <View style={styles.videoContainer}>
                    <YoutubePlayer
                        height={400}
                        play={false}
                        videoId={'kmad4v8-3XE'}
                    />
                </View>
            </ScrollView>
        );
    };
}

const styles = StyleSheet.create({
    textStyle: {
        margin: 10,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18
    },
    videoContainer: {
        margin:10,
    }
})

export default Home;