import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

export default function Footer({ onSelect }) {
  return (
    <View style={styles.footer}>
      <Text style={styles.titulo}>
        Visit Japan
      </Text>

      <View style={styles.opciones}>
        <Pressable
          onPress={() => onSelect('culture')}
        >
          <Text style={styles.link}>
            Culture
          </Text>
        </Pressable>

        <Pressable
          onPress={() => onSelect('traditions')}
        >
          <Text style={styles.link}>
            Traditions
          </Text>
        </Pressable>

        <Pressable
          onPress={() => onSelect('technology')}
        >
          <Text style={styles.link}>
            Technology
          </Text>
        </Pressable>
      </View>
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
    marginBottom: 10,
  },

  opciones: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  link: {
    color: '#EC407A',
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 10,
  },
});