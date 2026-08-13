import React, { useState } from 'react';

import {
  FlatList,
  Image,
  StyleSheet,
  Pressable,
  Modal,
  View,
} from 'react-native';

const FOTOS = [
  {
    id: '1',
    imagen:
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989',
  },

  {
    id: '2',
    imagen:
      'https://images.unsplash.com/photo-1492571350019-22de08371fd3',
  },

  {
    id: '3',
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4jOMtLuPD41vr8EluZwNnlR7kBKRpHSjL8sSpzQhtQ&s=10',
  },
];

export default function Galeria() {
  const [modalVisible, setModalVisible] =
    useState(false);

  const [imagenActual, setImagenActual] =
    useState('');

  function abrirImagen(url) {
    setImagenActual(url);
    setModalVisible(true);
  }

  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={FOTOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              abrirImagen(item.imagen)
            }
          >
            <Image
              source={{ uri: item.imagen }}
              style={styles.imagen}
            />
          </Pressable>
        )}
      />

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() =>
          setModalVisible(false)
        }
      >
        <Pressable
          style={styles.fondo}
          onPress={() =>
            setModalVisible(false)
          }
        >
          <View>
            <Image
              source={{ uri: imagenActual }}
              style={styles.imagenGrande}
              resizeMode="contain"
            />
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  imagen: {
    width: 220,
    height: 140,
    borderRadius: 15,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#F8BBD0',
  },

  fondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },

  imagenGrande: {
    width: 320,
    height: 500,
    borderRadius: 20,
  },
});