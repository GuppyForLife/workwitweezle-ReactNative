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

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#fff'
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
                backgroundColor: '#fff'
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
                        name='video-camera'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    /> 
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#FFF',
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
        backgroundColor: '#fff',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: "row"
    },
    drawerImage: {
        height: 100,
        width: 100
    },
    stackIcon: {
        marginLeft: 10,
        color: '#000',
        fontSize: 24
    }
});

export default Main;