import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [clock, setClock] = useState(0.0);
  const [timer, setTimer] = useState(null);
  const [btn, setBtn] = useState('VAI');
  const [lastTime, setLastTime] = useState(null);

  const go = () => {
    if (timer === null) {
      const intervalId = setInterval(() => {
        setClock(prevClock => prevClock + 0.1);
      }, 130);
      setTimer(intervalId);
      setBtn('PARAR');
    } else {
      clearInterval(timer);
      setTimer(null);
      setBtn('VAI');
    }
  };

  const clean = () => {
    if (timer !== null) {
      clearInterval(timer);
      setTimer(null);
    }
    setLastTime(clock);
    setClock(0);
    setBtn('VAI');
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.stopwatch}
        source={require('./src/images/cronometro.png')}
      />
      <Text style={styles.timer}>{clock.toFixed(1)}</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity onPress={go} style={styles.btn}>
          <Text style={styles.btnText}>{btn}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clean} style={styles.btn}>
          <Text style={styles.btnText}>LIMPAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lastTimeArea}>
        <Text style={styles.lastTime}>
          {lastTime > 0 ? `Último tempo: ${lastTime.toFixed(2)}s` : ''}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00aeef',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  lastTimeArea: {
    marginTop: 40,
  },
  lastTime: {
    fontSize: 25,
    color: '#FFF',
    fontStyle: 'italic',
  },
});

export default App;
