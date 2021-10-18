import React, { Component } from 'react';
import {  StyleSheet, Text, ScrollView } from 'react-native';
import { Tile } from 'react-native-elements';
import { BEHIND } from '../shared/bts';

function RenderPhotos({photo}) {

    if (photo) {
        return (
            <ScrollView>
                <Text style={styles.titleText}>
                    {photo.title}
                </Text>
                <Text style={styles.description}>
                    {photo.description}
                </Text>
                {photo.images.map(image => {
                    return(
                        <Tile
                            imageSrc={image} 
                        />
                    )
                })}
            </ScrollView>
        );
    }
    return <View />;
}

class PhotoInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: BEHIND
        };
    }

    static navigationOptions = {
        title: 'Photo Details'
    }

    render() {
        const photoId = this.props.navigation.getParam('photoId');
        const photo = this.state.photos.filter(photo => photo.id === photoId)[0]
        return <RenderPhotos photo={photo} />
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },
    description: {
        textAlign: 'center',
        fontSize: 17,
        margin: 10
    }
})

export default PhotoInfo;