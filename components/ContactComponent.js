import React, { Component } from "react";
import { StyleSheet, TextInput, View, Button, Alert, Image, Text } from "react-native";
import { Card } from "react-native-elements";

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    static navigationOptions = {
        title: 'Contact'
    };

    resetForm(){
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        });
        
    }

    render(){
        return(
            <View>
                <Text style={styles.text}>
                If there is a specific project I can help you navigate through or any idea you would love to bring to life, please contact me NOW!!! The name is “WorkWit” for a reason. I do not take over your vision. I work with you to bring it to life! Please be deposit ready and have as much detail as possible that you would like to share to help with cultivating your creation!
                </Text>
                <Card>
                    <Card.Title>Let's #WorkWitWeezle</Card.Title>
                    <TextInput
                        placeholder='First Name'
                        value={this.state.firstName}
                        onChangeText={(text) => {this.setState({ firstName: text})} }
                        style={styles.formRow}
                        clearButtonMode='always'
                    />
                    <TextInput
                        placeholder='Last Name'
                        value={this.state.lastName}
                        onChangeText={(text) => {this.setState({ lastName: text})} }
                        style={styles.formRow}
                        clearButtonMode='always'
                    />
                    <TextInput
                        placeholder='Email'
                        value={this.state.email}
                        onChangeText={(text) => {this.setState({ email: text})} }
                        style={styles.formRow}
                        clearButtonMode='always'
                    />
                    <TextInput
                        placeholder='Subject/Service'
                        value={this.state.subject}
                        onChangeText={(text) => {this.setState({ subject: text})} }
                        style={styles.formRow}
                        clearButtonMode='always'
                    />
                    <TextInput
                        placeholder='Message'
                        value={this.state.message}
                        onChangeText={(text) => {this.setState({ message: text})} }
                        style={styles.formRow}
                        clearButtonMode='always'
                    />
                    <Button 
                        title='Submit'
                        onPress={() => Alert.alert(
                            'Submit?',
                            `Name: ${this.state.firstName} ${this.state.lastName}\nEmail: ${this.state.email}\nSubject/Service: ${this.state.subject}\nMessage: ${this.state.message}`,
                            [
                                {
                                    text: 'Cancel',
                                    style: 'cancel',
                                    onPress: () => console.log('Pressed cancel')
                                },
                                {
                                    text: 'OK',
                                    onPress: () => this.resetForm()
                                }
                            ],
                            { cancelable: false }
                        )}
                    />
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formRow: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    imageStyle: {
        height: 200,
        width:200,
        resizeMode: "contain"
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        margin: 10,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default Contact;