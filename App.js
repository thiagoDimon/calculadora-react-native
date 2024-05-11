import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function App() {
  const [resultado, setResultado] = useState([0])
  const [ehPrimeiroNumero, setEhPrimeiroNumero] = useState(true);

  function setResultadoTela(valor) {
    if (valor === "C") {
      setEhPrimeiroNumero(true);
      return setResultado([0]);
    }
    if ((ehPrimeiroNumero && valor === 0) || 
        (ehPrimeiroNumero && valor === "/") || 
        (ehPrimeiroNumero && valor === "-") || 
        (ehPrimeiroNumero && valor === "+") || 
        (ehPrimeiroNumero && valor === "X")) {
      return;
    }
    if (ehPrimeiroNumero) {
      setEhPrimeiroNumero(false);
      return setResultado([valor]);
    }
    return setResultado(oldResultado => [...oldResultado, valor]);
  }

  function calcularResultado() {
    if (resultado.includes("+")) {
      const resultadoFinal = resultado[0] + resultado[2];
      setResultado([resultadoFinal]);
    }
    if (resultado.includes("-")) {
      const resultadoFinal = resultado[0] - resultado[2];
      setResultado([resultadoFinal]);
    }
    if (resultado.includes("X")) {
      const resultadoFinal = resultado[0] * resultado[2];
      setResultado([resultadoFinal]);
    }
    if (resultado.includes("/")) {
      const resultadoFinal = resultado[0] / resultado[2];
      setResultado([resultadoFinal]);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={[styles.resultado, { flex: 1, width: "100%" }]}>
        <Text style={{fontSize: 30}}>{resultado}</Text>
      </View>
      <View style={{ flex: 0.5 }} />
      <View style={{ flex: 3 }}>
        <View style={[styles.botoes, { flex: 0.5 }]}>
          <Button
            buttonColor="#2e2f38"
            mode="contained"
            style={styles.botao}
            onPress={() => setResultadoTela("C")}
          >
            <Text fontSize={30}>C</Text>
          </Button>
          <Button
            buttonColor="#d2d3da"
            textColor="#000000"
            mode="contained"
            style={styles.botao}
            onPress={() => setResultadoTela(0)}
          >
            0
          </Button>
          <Button
            buttonColor="#2e2f38"
            mode="contained"
            style={styles.botao}
            onPress={() => setResultadoTela("/")}
          >
            /
          </Button>
          <Button
            buttonColor="#4b5efc"
            mode="contained"
            style={styles.botao}
            onPress={() => setResultadoTela("X")}
          >
            X
          </Button>
        </View>
        <View style={[styles.botoes, { flex: 0.5 }]}>
          <Button
            buttonColor="#d2d3da"
            textColor="#000000"
            mode="contained"
            style={styles.botao}
            onPress={() => setResultadoTela(7)}
          >
            7
          </Button>
          <Button
            buttonColor="#d2d3da"
            textColor="#000000"
            mode="contained"
            style={styles.botao}
            onPress={() => setResultadoTela(8)}
          >
            8
          </Button>
          <Button
            buttonColor="#d2d3da"
            textColor="#000000"
            mode="contained"
            style={styles.botao}
            onPress={() => setResultadoTela(9)}
          >
            9
          </Button>
          <Button
            buttonColor="#4b5efc"
            mode="contained"
            style={styles.botao}
            onPress={() => setResultadoTela("-")}
          >
            -
          </Button>
        </View>
        <View style={[styles.botoes, { flex: 0.5 }]}>
          <Button
            buttonColor="#d2d3da"
            textColor="#000000"
            mode="contained"
            style={styles.botao}
            onPress={() => setResultadoTela(4)}
          >
            4
          </Button>
          <Button
            buttonColor="#d2d3da"
            textColor="#000000"
            mode="contained"
            style={styles.botao}
            onPress={() => setResultadoTela(5)}
          >
            5
          </Button>
          <Button
            buttonColor="#d2d3da"
            textColor="#000000"
            mode="contained"
            style={styles.botao}
            onPress={() => setResultadoTela(6)}
          >
            6
          </Button>
          <Button
            buttonColor="#4b5efc"
            mode="contained"
            style={styles.botao}
            onPress={() => setResultadoTela("+")}
          >
            +
          </Button>
        </View>
        <View style={[styles.botoes, { flex: 0.5 }]}>
          <Button
            buttonColor="#d2d3da"
            textColor="#000000"
            mode="contained"
            style={styles.botao}
            onPress={() => setResultadoTela(1)}
          >
            1
          </Button>
          <Button
            buttonColor="#d2d3da"
            textColor="#000000"
            mode="contained"
            style={styles.botao}
            onPress={() => setResultadoTela(2)}
          >
            2
          </Button>
          <Button
            buttonColor="#d2d3da"
            textColor="#000000"
            mode="contained"
            style={styles.botao}
            onPress={() => setResultadoTela(3)}
          >
            3
          </Button>
          <Button
            buttonColor="#4b5efc"
            mode="contained"
            style={styles.botao}
            onPress={() => calcularResultado()}
          >
            =
          </Button>
        </View>
        <View style={{ flex: 0.4 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  resultado: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingRight: 20,
  },
  botoes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  botao: {
    width: 80,
    height: 80,
    alignContent: "center",
    justifyContent: "center",
  },
});
