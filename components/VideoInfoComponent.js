import React, { Component } from 'react';
import { ActivityIndicatorBase, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { VIDEOS } from '../shared/videos';
import YoutubePlayer from 'react-native-youtube-iframe';

function RenderVideo({video}) {

    if (video) {
        return (
            <View>
                <Text style={styles.titleText}>
                    {video.title} - {video.artist}
                </Text>
                <View style={styles.video}>
                    <YoutubePlayer
                        height={400}
                        play={false}
                        videoId={video.source}
                    />
                </View>
                <Text style={styles.description}>
                    {video.description}
                </Text>
            </View>
        );
    }
    return <View />;
}

class VideoInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: VIDEOS
        };
    }

    static navigationOptions = {
        title: 'Video Information'
    }

    render() {
        const videoId = this.props.navigation.getParam('videoId');
        const video = this.state.videos.filter(video => video.id === videoId)[0]
        return <RenderVideo video={video} />
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },
    video: {
        margin: 10
    },
    description: {
        textAlign: 'center',
        fontSize: 17,
        marginStart: 10,
        marginEnd: 10
    }
})

export default VideoInfo;