import React, { Component } from "react";
import { View, Platform, StyleSheet, Text, ScrollView, Image } from "react-native";
import Constants  from "expo-constants";
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Icon } from "react-native-elements";
import SafeAreaView from 'react-native-safe-area-view';
import { createStackNavigator } from "react-navigation-stack";
import Home from "./HomeComponent";
import Videos from "./VideoComponent";
import VideoInfo from "./VideoInfoComponent";
import Photos from "./PhotosComponent";
import PhotoInfo from "./PhotoInfoComponent";
import PromoVisuals from "./PromoVisuals";
import Contact from "./ContactComponent";

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#B6B6B9'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const VideosNavigator = createStackNavigator(
    {
        Videos: { screen: Videos },
        VideoInfo: { screen: VideoInfo }
    },
    {
        initialRouteName: 'Videos',
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#B6B6B9'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='play'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const PhotosNavigator = createStackNavigator(
    {
        Photos: { screen: Photos },
        PhotoInfo: { screen: PhotoInfo }
    },
    {
        initialRouteName: 'Photos',
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#B6B6B9'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='camera'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const PromoNavigator = createStackNavigator(
    {
        PromoVisuals: { screen: PromoVisuals }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#B6B6B9'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='video-camera'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#B6B6B9'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='address-book'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const CustomerDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}
        >
            <View style={styles.drawerHeader}>
                <View>
                    <Image
                        source={require('./Images/WorkWitWeezleLogo.png')}
                        style={styles.drawerImage}
                    />
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { 
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    /> 
                )
            }
        },
        Videos: { 
            screen: VideosNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='play'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    /> 
                )
            }
        },
        Photos: { 
            screen: PhotosNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='camera'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    /> 
                )
            }
        },
        PromoVisuals: { 
            screen: PromoNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='video-camera'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    /> 
                )
            }
        },
        Contact: { 
            screen: ContactNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='address-book'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    /> 
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#B6B6B9',
        contentComponent: CustomerDrawerContentComponent
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

    render() {
        return(
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                }}
            >
                <AppNavigator />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#B6B6B9',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: "row"
    },
    drawerImage: {
        height: 200,
        width: 200,
        resizeMode: 'contain'
    },
    stackIcon: {
        marginLeft: 10,
        color: '#000',
        fontSize: 24
    }
});

export default Main;