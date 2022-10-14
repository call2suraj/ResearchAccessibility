import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '../../../elements/CheckBox';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const CheckBoxExample = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isChecked, setIsChecked] = React.useState(false);
  const [isCheckedOne, setIsCheckedOne] = React.useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = React.useState(false);
  const [isCheckedThree, setIsCheckedThree] = React.useState(false);
  const [isCheckedFour, setIsCheckedFour] = React.useState(true);
  const [isCheckedFive, setIsCheckedFive]= React.useState(true);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white, margin: 2,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingTop: 10,
          }}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Tap me!"
            onPress={() => { console.log('hi') }} >
            <View style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
              <Text style={{ fontSize: 18 }}> Checkbox : Left Label : Accessibility Enabled </Text>
            </View>
          </TouchableOpacity>
          <CheckBox
            style={{ flex: 1, padding: 10, width: 200 }}
            onClick={() => {
              setIsCheckedTwo(!isCheckedTwo)
            }}
            isChecked={isCheckedTwo}
            leftText={"Left Label CheckBox"}
            accessLabel="Left Label CheckBox"
            accessHint="Hint Double Tab"
            accessibilityRole="button"
          />
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            backgroundColor: Colors.white, padding: 10,

          }}
        />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingTop: 10,
          }}>
          <Text style={{ fontSize: 18 }}> Checkbox Example : Right Label </Text>
          <CheckBox
            style={{ flex: 1, padding: 10, width: 200 }}
            onClick={() => {
              setIsCheckedThree(!isCheckedThree)
            }}
            isChecked={isCheckedThree}
            rightText={"Right Label CheckBox"}
          />
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            backgroundColor: Colors.white, padding: 10,

          }}
        />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingTop: 10,
          }}>
          <Text style={{ fontSize: 18 }}> Checkbox Example : No Text</Text>

          <CheckBox
            style={{ flex: 1, padding: 10, width: 200 }}
            onClick={() => {
              setIsChecked(!isChecked)
            }}
            isChecked={isChecked}
          />
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            backgroundColor: Colors.white, padding: 10,

          }}
        />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingTop: 10,
          }}>
          <Text style={{ fontSize: 18 }}> Checkbox Example : Disabled and Colored</Text>

          <CheckBox
            style={{ flex: 1, padding: 10, width: 200 }}
            onClick={() => {
              setIsCheckedOne(!isCheckedOne)
            }}
            isChecked={isCheckedOne}
            rightText={"Disabled CheckBox"}
            disabled={true}
            uncheckedCheckBoxColor = "#d4d4d5"
          />
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            backgroundColor: Colors.white, padding: 10,

          }}
        />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingTop: 10,
          }}>
          <Text style={{ fontSize: 18 }}> Checkbox Example : Colored</Text>

          <CheckBox
            style={{ flex: 1, padding: 10, width: 200 }}
            onClick={() => {
              setIsCheckedOne(!isCheckedOne)
            }}
            uncheckedCheckBoxColor = "red"
            isChecked={isCheckedOne}
            rightText={"Colored CheckBox"}
          />
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            backgroundColor: Colors.white, padding: 10,

          }}
        />


        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingTop: 10,
          }}>
          <Text style={{ fontSize: 18 }}> Checkbox Example : Default Checked</Text>

          <CheckBox
            style={{ flex: 1, padding: 10, width: 250 }}
            onClick={() => {
              setIsCheckedFour(!isCheckedFour)
            }}
            uncheckedCheckBoxColor = "red"
            isChecked={isCheckedFour}
            rightText={"Default Checked CheckBox"}
          />
        </View>


        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingTop: 10,
          }}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Tap me!"
            onPress={() => { console.log('hi') }} >
            <View style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
              <Text style={{ fontSize: 18 }}> Checkbox : Right Label : Accessibility Enabled </Text>
            </View>
          </TouchableOpacity>
          <CheckBox
            style={{ flex: 1, padding: 10, width: 200 }}
            onClick={() => {
              setIsCheckedFive(!isCheckedFive)
            }}
            isChecked={isCheckedFive}
            rightText={"Accessibility CheckBox"}
            accessLabel="Accessibility CheckBox"
            accessHint="Hint Double Tab"
            accessibilityRole="checkbox"
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 2,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default CheckBoxExample;
