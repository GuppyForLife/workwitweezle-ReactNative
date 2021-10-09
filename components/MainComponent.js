import React, { Component } from "react";
import { View } from "react-native";
import { createAppContainer } from 'react-navigation'

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

    render() {
        return(
            <View>
                <AppNavigator />
            </View>
        )
    }
}

export default Main;