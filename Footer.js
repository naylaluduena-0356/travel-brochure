import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.titulo}>
        Visit Japan
      </Text>

      <Text style={styles.texto}>
        Culture • Traditions • Technology
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 30,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C2185B',
  },

  texto: {
    color: 'gray',
    marginTop: 8,
  },
});