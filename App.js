import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/screens/Cesta';
import { Montserrat_400Regular,Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useFonts } from 'expo-font';
import mock from './src/mocks/cesta';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fontesCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  
  });

  if (!fontesCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}
