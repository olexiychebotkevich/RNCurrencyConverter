import React,{Component} from 'react'
import {
    View,
    Button,
    TextInput,
    StyleSheet,
    MaskedViewIOS, 
    Text,
 
  } from 'react-native'
   class HomeScreen extends Component {
    render(){
        const {navigate} = this.props.navigation;
        return(
        

            <View style={styles.container}>
               <Text style={styles.titleText}>Home page</Text>
                <Button
                    title="Go to converter"
                    onPress={() => navigate('Converter')}
                />
                
                <Button
                    title="Go to gallery"
                    onPress={() => navigate('Gallery')}
                />
                 <Button
                    title="Go to list contacts"
                    onPress={() => navigate('Contact')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3d3d5c',
        fontStyle: 'italic',
        textAlign: 'center'

    },

  
});

export default  HomeScreen;