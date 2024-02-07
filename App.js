import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

export default function App() {
  const vai = () => {
    Alert.alert("Titulo da janela", "Fala parça!");
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View>
          <Text>Topo/Cabeçalho</Text>
        </View>
        <View>
          <Text>Conteúdo...</Text>
        </View>
        <View>
          <Text>Rodapé...</Text>
          <Button title="Toca aqui" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}
