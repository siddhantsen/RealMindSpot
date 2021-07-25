import * as React from 'react';
import {useState} from 'react';
import { Dimensions, Button, View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, TouchableHighlight, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Timer} from 'react-native-stopwatch-timer';


const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style = {styles.journalButton}
        onPress={() => navigation.navigate('Journal')}
      >
        <Image source={require('./assets/journal.png')}  style={styles.pictures}></Image>

      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.meditateButton}
        onPress={() => navigation.navigate('Meditate')}
      >
        <Image source={require('./assets/christmas-candle.png')}  style={styles.pictures}></Image>

      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.stressButton}
        onPress={() => navigation.navigate('Stress')}
      
      >
        <Image source={require('./assets/music.png')}  style={styles.pictures}></Image>

      </TouchableOpacity>
    </View>
  );
}
//journal screen
function JournalScreen({navigation}) {
  return (
    <View style={styles.container}>
       <TouchableOpacity
        style = {styles.journalScreenButtons}
        onPress = {() => navigation.navigate('viewJournals')}
        
      >
        <Text> New Journal Entry </Text>
      </TouchableOpacity>

      

      
      
    
    </View>
  );
}
function ViewJournalScreen({props}) {
  
  const [text, onChangeText] = React.useState("No Text");
  const [number, onChangeNumber] = React.useState(null);


  
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: "#cff2ff", }}>
      <Text>Tell us about your day. This is a safe space to let out everything you feel. Simply press "return" and "back" to exit. </Text>
      <Text> Your journals will not be saved so make sure to copy and paste anything you wish to keep for the future.</Text>
      <TextInput
        style = {styles.input}
        onChangeText = {onChangeText}
        value={text}
        multiline={true}

        />
        
       
  
    </View>

  )
}


const MeditateScreen = () => {

  
    const [isTimerStart, setIsTimerStart] = useState(false);
    const [timerDuration] = useState(600000);
    const [resetTimer, setResetTimer] = useState(false);
  return (
    

    <SafeAreaView style={styles.containertwo}>
      
      <View style={styles.containertwo}>
        <Text style={styles.title}>
            Find a nice play to comfortably sit down. Breathe naturally and focus on the movement of air through your system.
            When you are ready start the timer.
        </Text>
        <View style={styles.sectionStyle}>
          <Timer
            totalDuration={timerDuration}
            msecs
            // Time Duration
            start={isTimerStart}
            // To start
            reset={resetTimer}
            // To reset
            options={options}
            // Options for the styling
            handleFinish={() => {
              alert('Meditation is over! Nice Job!');
            }}
            // Can call a function On finish of the time
            getTime={(time) => {
              console.log(time);
            }}
          />
          <TouchableHighlight
            onPress={() => {
              setIsTimerStart(!isTimerStart);
              setResetTimer(false);
            }}>
            <Text style={styles.buttonText}>
              {!isTimerStart ? 'START' : 'STOP'}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setIsTimerStart(false);
              setResetTimer(true);
            }}>
            <Text style={styles.buttonText}>RESET</Text>
          </TouchableHighlight>
        </View>
        
      </View>
    </SafeAreaView>
    
     
  );
}; 


//the following four screens are the different meditate screens
//anxiety




function StressScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style = {styles.journalButton} onPress = {()=>navigation.navigate('Stress Relieving Music')}>
        <Text> Stress Relieving Music </Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.meditateButton} onPress = {()=>navigation.navigate('Stress Relieving Sounds')}>
        <Text> Stress Relieving Sounds </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.stressButton} onPress = {()=>navigation.navigate('White Noise')}>
        <Text> White Noise </Text>
      </TouchableOpacity>
    </View>

  );
}

function MusicScreen()
{
  const [playing, setPlaying] = useState(false);
  const onStateChange = (state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }
  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  }
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'lFcSrYw-ARY'}
        />
    </View>
  )
}

function SoundScreen()
{
  const [playing, setPlaying] = useState(false);
  const onStateChange = (state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }
  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  }
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'onsdzhxcQPk'}
        />
    </View>
  )
}

function WhiteNoiseScreen()
{
  const [playing, setPlaying] = useState(false);
  const onStateChange = (state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }
  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  }
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'nMfPqeZjc2c'}
        />
    </View>
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="MindSpot Home" component={HomeScreen} />
        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name = "Meditate" component={MeditateScreen} />
        <Stack.Screen name = "Stress" component = {StressScreen} />
        
        <Stack.Screen name = "Stress Relieving Music" component = {MusicScreen} />
        <Stack.Screen name = "Stress Relieving Sounds" component = {SoundScreen} />
        <Stack.Screen name = "White Noise" component = {WhiteNoiseScreen} />
        <Stack.Screen name = "viewJournals" component = {ViewJournalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cff2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  journalButton: {
    position: 'absolute',
    top: windowWidth/3,
    left: windowWidth/12,

    width: '80%',
    height: '20%',
    backgroundColor: "#5c9aff",
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

    },

  meditateButton: {
    position: 'absolute',
    top: windowWidth/3 * 2.25,
    left: windowWidth/12,

    width: '80%',
    height: '20%',
    backgroundColor: "#5c9aff",
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',


  },

  stressButton: {
    position: 'absolute',
    top: windowWidth/3 * 3.5,
    left: windowWidth/12,
    width: '80%',
    height: '20%',
    backgroundColor: '#5c9aff',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',


  },

  pictures: {
    width: 150,
    height: 150,

  },

  journalScreenButtons: {

    position: 'absolute',
    top: windowWidth/3 * .45,
    left: windowWidth/12,
    width: '80%',
    height: '40%',
    backgroundColor: '#5c9aff',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

journalScreenButtonsTwo: {

  position: 'absolute',
    top: windowWidth/3 * 3,
    left: windowWidth/12,
    width: '80%',
    height: '40%',
    backgroundColor: '#5c9aff',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

},

med1: {
    position: 'absolute',
    top: windowWidth/6,
    left: windowWidth/12,
    width: '80%',
    height: '17%',
    backgroundColor: "#5c9aff",
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

},

med2: {
    position: 'absolute',
    top: windowWidth/6 * 3.2,
    left: windowWidth/12,
    width: '80%',
    height: '17%',
    backgroundColor: "#5c9aff",
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
},

med3: {
    position: 'absolute',
    top: windowWidth/6 * 5.4,
    left: windowWidth/12,
    width: '80%',
    height: '17%',
    backgroundColor: "#5c9aff",
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
},

med4: {
    position: 'absolute',
    top: windowWidth/6 * 7.6,
    left: windowWidth/12,
    width: '80%',
    height: '17%',
    backgroundColor: "#5c9aff",
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

},
containertwo: {
  flex: 1,
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#cff2ff',
},
title: {
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  padding: 20,
},
sectionStyle: {
  flex: 1,
  marginTop: 32,
  alignItems: 'center',
  justifyContent: 'center',
},
buttonText: {
  fontSize: 20,
  marginTop: 10,
},
  
input: {
  height: '30%',
  width: '80%',
  margin: 12,
  borderWidth: 1,
  padding: 10,
  borderRadius: 40,

},


  
});

const options = {
  container: {
    backgroundColor: '#5c9aff',
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7,
  },
};
export default App;
