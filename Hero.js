import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function Hero() {
  return (
    <View style={styles.hero}>
      <Image
        source={{
          uri: 'https://cdn.britannica.com/91/1791-004-DA3579A5/Flag-Japan.jpg',
        }}
        style={styles.imagen}
      />

      <Text style={styles.titulo}>
        Travel and Learn in Japan!
      </Text>

      <Text style={styles.subtitulo}>
        Discover culture, traditions and amazing places.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    padding: 20,
    alignItems: 'center',
  },

  imagen: {
    width: 300,
    height: 180,
    borderRadius: 15,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    color: '#C2185B',
  },

  subtitulo: {
    fontSize: 16,
    color: '#AD1457',
    textAlign: 'center',
    marginTop: 10,
  },
});