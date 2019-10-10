import React, { Component, Fragment } from 'react'
import { View, Text, Image,StyleSheet ,ScrollView} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import axios from 'axios'


class ContactScreen extends Component {

    state = {
        contacts: [],
        serverurl:'http://10.0.2.2:5000'
    }

    componentDidMount() {
        this.sendServerGet();
    }

    sendServerGet = () => {
        const url = "http://10.0.2.2:5000/api/Contact/getcontacts";
        console.log("Show click info");
        axios.get(url).then((response) => {
            this.setState(previousState => ({contacts: response.data }))
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Fragment>
                   <Button
                    title="ADD CONTACT"
                    onPress={() => navigate('Gallery')}
                    />
            <ScrollView>
             
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                {
                    this.state.contacts.map((u, i) => {
                        return (
                            <View style={{ height: 100}} key={u.email} >

                                <View key={i} style={{ flex: 1, height: 50, margin: 10, flexDirection: 'row' , backgroundColor: 'skyblue' }}>
                                    <View style={{ width: 150, height: 100 ,marginLeft:10}}>
                                        <Image
                                            style={styles.image}
                                            resizeMode="cover"
                                            source={{ uri: this.state.serverurl + '/Images/' + u.image }}
                                        />
                                    </View>
                                    <View style={{ width: 160, height: 160 }}>
                                        <Text style={styles.name}>{u.name}</Text>
                                        <Text style={styles.name}>{u.phoneNumber}</Text>
                                   </View>

                                </View>
                            </View>
                           
                        );
                    })
                }
        

            </View>
</ScrollView>
</Fragment>


        );
    }
}

const styles = StyleSheet.create({


    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        borderRadius: 200 / 2,
        margin:5
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3d3d5c',
        fontStyle: 'italic',
        textAlign: 'center'

    },
    name: {
        fontSize: 20,
        textAlign: 'center',
        fontStyle: 'italic',

    }


});


export default ContactScreen;