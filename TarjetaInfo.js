import {
  Text,
  StyleSheet,
  Pressable,
  View,
  Image,
} from 'react-native';

export default function TarjetaInfo({
  item,
  abrirModal,
}) {
  return (
    <Pressable
      onPress={() => abrirModal(item)}
      style={({ pressed }) => [
        styles.tarjeta,
        pressed && styles.presionada,
      ]}
    >
      <View style={styles.contenido}>
        <Image
          source={{ uri: item.imagen }}
          style={styles.imagen}
        />

        <Text style={styles.titulo}>
          {item.titulo}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFE4EC',
    padding: 15,
    marginHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F8BBD0',
  },

  presionada: {
    opacity: 0.7,
  },

  contenido: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  imagen: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },

  titulo: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C2185B',
  },
});