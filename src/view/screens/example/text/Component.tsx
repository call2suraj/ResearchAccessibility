import * as React from 'react';
import { SafeAreaView, View, Linking, Text, TouchableOpacity, Alert, Button, TouchableWithoutFeedback, AccessibilityInfo } from 'react-native';

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

  const onLinkPress = () => {
    Alert.alert(
      "Link Demo",
      "This Demo is designed for inline text.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    console.log("pressed onLinkPress")
  }

  const onLinkTextPress = () => {
    Alert.alert(
      "Multiple Link Demo",
      "This Demo is designed for inline text with a link",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    console.log("pressed onLinkTextPress")
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
                accessible={true}
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


      <View style={{ flexDirection: 'column', height: 80, alignItems: 'stretch', flexWrap: 'wrap', width: '100%' }} accessible={true}>
        <View style={{
          backgroundColor: '#1abc9c', height: 30
        }}>
          <CTEXT style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{'Example Four : Text with link in one row'}</CTEXT>
        </View>
        <View style={{ flexDirection: "row", flexShrink: 1, flexWrap: 'wrap', height: 50, paddingTop: 15, paddingBottom: 15, width: '100%' }}>
          <Text accessible={true} accessibilityLabel="Add your link"  > Add Your </Text>
          <TouchableOpacity accessible={true}
            accessibilityLabel="Click Web Link" onPress={() => onTxtPress()}>
            <Text style={{ color: 'blue' }} accessible={true} accessibilityLabel="Web Link">
              Web Link
            </Text>
          </TouchableOpacity>
          <Text style={{ textAlign: 'justify' }} accessible={true} accessibilityLabel="here. You can use" > Here. You can use </Text>
          <TouchableOpacity accessible={true}
            accessibilityLabel="Click Cloud Link" onPress={() => onTxtPress()}>
            <Text style={{ color: 'blue', textAlign: 'justify' }} accessible={true} accessibilityLabel="Cloud Link">
              this Link
            </Text>
          </TouchableOpacity>
          <Text style={{ textAlign: 'justify' }} accessible={true} accessibilityLabel="Cloud"> for Cloud.
          </Text>
        </View>
      </View>


      <View style={{
        backgroundColor: '#1abc9c', height: 30
      }}>
        <CTEXT style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{'Example Five : Text with link inside paragraph '}</CTEXT>
      </View>
      <View style={{ flexDirection: "row" }} >
        <View style={{ flexDirection: "column", height: 50, paddingTop: 15, flexWrap: 'wrap' }} accessible={true}>
          <Text accessible={true} accessibilityLabel="I can click"> I can click one{`\n`} inner. This is a</Text>

          <View style={{ flexDirection: "column", flexWrap: 'wrap', height: 50 }}>

            <TouchableOpacity accessible={true} onPress={() => onTxtPress()} accessible={true} accessibilityLabel="Research Link!" >
              <Text style={{ color: 'blue', fontWeight: 'bold' }}>here. {`\n`} </Text>
            </TouchableOpacity>

            <SafeAreaView>
              <Text style={{ flexShrink: 1, color: 'blue', maxWidth: 350, height: 40, }}
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

      <View style={{ flexDirection: 'column', height: 80, marginTop: 10, marginBottom: 15 }}>
        <View style={{
          backgroundColor: '#1abc9c', height: 30
        }}>
          <CTEXT style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{'Example Six : Text with link in one row part 2'}</CTEXT>
        </View>

        <View style={{ flexDirection: "row", flex: 1, flexWrap: 'wrap', height: 80, paddingTop: 15, paddingBottom: 15 }} accessible={true}>
          <Text style={{ textAlign: 'justify' }} accessible={true}
            accessibilityLabel="Recommended: You can use Cloud Scheduler and Cloud Functions here to manage task scheduling on Compute Engine." >
            Recommended: You can use Cloud Scheduler and Cloud Functions to manage task scheduling on Compute Engine.
          </Text>
          <TouchableOpacity accessible={true}
            accessibilityLabel="task scheduling on Compute Engine"
            onPress={() => onTxtPress()}>
            <Text style={{ color: 'blue' }} accessible={true} >
              {' here'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={{ flexDirection: 'column', height: 80, marginTop: 10, marginBottom: 15 }}>
        <View style={{
          backgroundColor: '#1abc9c', height: 30
        }}>
          <CTEXT style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{'Example Seven : Text with link and accessibilityRole'}</CTEXT>
        </View>

        <View>
          <Text style={{ textAlign: 'justify' }}
            accessibilityLabel="Consider a case where you have a block of text with an inline link. Like so. Tap to go to the Cat of the Day website."
            accessibilityRole="Link"
            onPress={async () => {
              const screenReaderEnabled = await AccessibilityInfo.isScreenReaderEnabled();
              if (screenReaderEnabled) {
                // Linking.openUrl("https://catoftheday.com/")
                onLinkPress();
              }
            }}
          >{'Consider a case where you have a block of text with an inline '}
            <Text style={{
              textDecorationLine: 'underline', color: 'blue', fontSize: 14
            }}
              onPress={() => onLinkPress()}
              // accessible={true}
              accessibilityRole='link'
            >link.
            </Text>

            <Text style={{ textAlign: 'justify' }} accessibilityLabel="When you need to insert a link inside a text in React Native, you might notice that the ">
              {'When you need to insert a link inside a text in React Native, you might notice that the '}
              <TouchableOpacity style={{ margin: 5, height: 20, paddingLeft: 5}}>
                <View style={{paddingTop: 3,}}>

                <Text style={{
                  textDecorationLine: 'underline', color: 'green', fontSize: 15, fontWeight:'bold'
                }}
                  onPress={async () => {
                    const screenReaderEnabled = await AccessibilityInfo.isScreenReaderEnabled();
                    if (screenReaderEnabled) {
                      // Linking.openUrl("https://catoftheday.com/")
                      onLinkTextPress()
                    }
                  }}
                  accessibilityRole='link'
                >
                  {' links'}
                </Text>
                </View>

              </TouchableOpacity>
              {'have a different positioning, they are usually around 5 pixels under the line.'}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  )
}

export default TextExample;
