import * as React from 'react';
import { SafeAreaView, View, Linking, Text, TouchableOpacity, Alert, Button, TouchableWithoutFeedback, } from 'react-native';

import { GLOBAL } from '../../../styles/global';
import { CTEXT } from '../../../elements/custom';

import { Props } from './index';

const TextExample: React.FC<Props> = (props: Props) => {

  const onTxtPress = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    console.log("pressed onTxtPress")
  }

  return (
    <View style={{ flexDirection: 'column', height: 30, }}>
      <View style={{
        backgroundColor: '#1abc9c', height: 30
      }}>
        <CTEXT style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{'Example One : Multi text in one row with events'}</CTEXT>
      </View>

      <View style={{ flexDirection: 'row', height: 30, paddingTop: 5, marginBottom: 15 }}>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Press me! For Demo. This is just an example."
          onPress={() => onTxtPress()}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{
              color: 'blue',
              fontWeight: 'bold',
              fontSize: 16,
            }}>Press here </Text>
            <Text style={{
              fontSize: 16,
              color: 'green',
            }}>{'For Demo.'}</Text>
            <Text style={{
              fontSize: 16,
              color: 'red',
            }}>{'This is just an example.'}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'column', height: 50, paddingTop: 5 }}>
        <View style={{
          backgroundColor: '#1abc9c', height: 30
        }}>
          <CTEXT style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{'Example Two : text with button in one row'}</CTEXT>
        </View>
        <View style={{ flexDirection: 'row', height: 30, paddingTop: 5, marginBottom: 15 }}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Text Button Example, Click Me!"
            accessibilityHint="Hint Double Tab"
            accessibilityRole="button"
            onPress={() => onTxtPress()}
          >
            <View style={{ paddingTop: 2, flex: 1, flexDirection: 'row' }}>
              <CTEXT>{'Text Button Example '}</CTEXT>
              <Text style={{ height: 20, color: 'red' }}
              >Click Me!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View style={{ flexDirection: 'column', height: 70, paddingTop: 15, marginTop: 10, marginBottom: 15 }}>
        <View style={{
          backgroundColor: '#1abc9c', height: 30
        }}>
          <CTEXT style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{'Example Three : Text and Button with link in one row'}</CTEXT>
        </View>
        <View style={{ flexDirection: 'row', height: 50, paddingTop: 5 }}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Text Button Example, Click Me!"
            accessibilityHint="Hint Double Tab"
            accessibilityRole="link"
            onPress={() => Linking.openURL('https://google.com')}
          >
            <View style={{ paddingTop: 2, flex: 1, flexDirection: 'row', paddingBottom: 15 }}>
              <CTEXT style={{ color: 'blue' }}>{'Text Button Example '}</CTEXT>
              <Text style={{ height: 20, color: 'blue' }}
              >Click Me!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View style={{ flexDirection: 'column', height: 80 }}>
        <View style={{
          backgroundColor: '#1abc9c', height: 30
        }}>
          <CTEXT style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{'Example Four : Text with link in one row'}</CTEXT>
        </View>
        <View style={{ flexDirection: "row", flex: 1, flexWrap: 'wrap', height: 50, paddingTop: 15, paddingBottom: 15 }}>
          <Text accessible={true} accessibilityLabel="Add your"  > Addyour </Text>
          <TouchableOpacity accessible={true}
            accessibilityLabel="Click Me!" onPress={() => Linking.openURL('https://www.google.com')}>
            <Text style={{ color: 'blue' }} accessible={true} >
              link
            </Text>
          </TouchableOpacity>
          <Text accessible={true} accessibilityLabel="here" > here.
          </Text>
        </View>
      </View>


      <View style={{
        backgroundColor: '#1abc9c', height: 30
      }}>
        <CTEXT style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{'Example Five : Text with link inside paragraph '}</CTEXT>
      </View>

      <View style={{ flexDirection: "row"}} >
      <View style={{ flexDirection: "column", height: 50, paddingTop: 15, flexWrap: 'wrap'}} accessible={true}>
        <Text accessible={true} accessibilityLabel="I can click"> I can click one{`\n`} inner. This is a</Text>

        <View style={{ flexDirection: "column", flexWrap: 'wrap', height: 50}}>

          <TouchableOpacity accessible={true} onPress={() => onTxtPress()} accessible={true} accessibilityLabel="Research Link!" >
            <Text style={{ color: 'blue', fontWeight: 'bold' }}>here. {`\n`} </Text>
          </TouchableOpacity>

          <SafeAreaView>
            <Text style={{ flexShrink: 1, color: 'blue', maxWidth:350 ,height: 40,}}
              accessible={true}
              accessibilityLabel="But the outer onPress is called instead of the inner one here. This is a test message for demo only."
            >but the outer onPress is called instead of 
             {`\n`}
            test message for demo only.
            </Text>
          </SafeAreaView>
        </View>
      </View>
      </View>
     
    </View>
  )
}

export default TextExample;
