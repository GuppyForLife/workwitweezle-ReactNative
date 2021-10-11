import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { VIDEOS } from '../shared/videos'

class Videos extends Component {

    constructor(props) {
        super(props);
        this.state ={
            videos: VIDEOS
        };
    }
    
    static navigationOptions = {
        title: 'Videos'
    };

    render() {
        const { navigate } = this.props.navigation;
        const RenderVideoCards = () => {
            return this.state.videos.map((video) => {
                return (
                    <View style={styles.container}>
                        <View style={styles.card_template}>
                            <TouchableOpacity onPress={() => navigate('VideoInfo', { videoId: video.id})}>
                                <Image 
                                    style={styles.card_image} 
                                    source={video.image} 
                                />
                            </TouchableOpacity>
                            <View style={styles.text_container}> 
                                <Text style={styles.card_title}>
                                    {video.title}{'\n'}
                                    {video.artist}
                                </Text>
                            </View>
                        </View>
                    </View>
                )
            } )
        }
        return (
            <ScrollView>
                <RenderVideoCards />
            </ScrollView>

        );
    };

}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent:'center',
      alignItems: 'center'
    },
    card_template:{
        width: wp('90%'),
        height:250,
        margin:10
    },
    card_image: {
      borderRadius : 10,
      height: 250,
      width: wp('90%')
    },
    text_container:{
      position: "absolute",
      bottom:0,
      padding: 5,
      backgroundColor: "rgba(0,0,0, 0.3)",
      borderBottomLeftRadius : 10,
      borderBottomRightRadius: 10,
    },
    card_title: {
       color: "white",
  
    }
  });

export default Videos;