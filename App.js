import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={[styles.resultado, { flex: 1 }]}>
        <Text>Aqui vai o resultado</Text>
      </View>
      <View style={{ flex: 3 }}>
        <View style={[styles.botoes, { flex: 1 }]}>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>C</Button>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>{''}</Button>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>%</Button>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>/</Button>
        </View>
        <View style={[styles.botoes, { flex: 1 }]}>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>7</Button>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>8</Button>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>9</Button>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>X</Button>
        </View>
        <View style={[styles.botoes, { flex: 1 }]}>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>4</Button>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>5</Button>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>6</Button>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>-</Button>
        </View>
        <View style={[styles.botoes, { flex: 1 }]}>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>1</Button>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>2</Button>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>3</Button>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>+</Button>
        </View>
        <View style={[styles.botoes, { flex: 1 }]}>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>.</Button>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>0</Button>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>{'<'}</Button>
          <Button mode="contained" style={styles.botao} onPress={console.log('clicou')}>
            <Text style={{fontSize: 20}}>=</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  resultado: {
    borderWidth: 3,
    borderColor: 'green'
  },
  botoes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    gap: 20,
  },
  botao: {
    width: 80,
    height: 80,
    alignContent: 'center',
    justifyContent: 'center',
  }
});
