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
      'https://idsb.tmgrup.com.tr/ly/uploads/images/2025/03/12/thumbs/800x531/372657.jpg',
  },

  {
    id: '2',
    imagen:
      'https://thejapantravelblog.com/wp-content/uploads/2024/07/Kawaguchi-Asama-Shrine-with-mt-fuji-in-the-back-Japan-2.jpg',
  },

  {
    id: '3',
    imagen:
      'https://danae-explore.com/wp-content/uploads/2024/09/Quioto-62a.jpg',
  },
];

export default function Galeria() {
  const [modalVisible, setModalVisible] =
    useState(false);

  const [imagenActual, setImagenActual] =
    useState('');

  const abrirImagen = (url) => {
    setImagenActual(url);
    setModalVisible(true);
  };

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
          <Image
            source={{ uri: imagenActual }}
            style={styles.imagenGrande}
            resizeMode="contain"
          />
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
    backgroundColor:
      'rgba(0,0,0,0.8)',
  },

  imagenGrande: {
    width: '90%',
    height: '70%',
    borderRadius: 20,
  },
});