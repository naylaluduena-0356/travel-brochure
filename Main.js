import React, { useState } from 'react';

import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';

import Hero from './Hero';
import Galeria from './Galeria';
import Footer from './Footer';
import TarjetaInfo from './TarjetaInfo';

const INFORMACION = [
  {
    id: '1',
    titulo: 'Public Transport',
    descripcion:
      'When using public transport, people are expected to keep their phone in silent and avoid speaking loudly.',
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNsLV1jz_I0jOpB0zmiur0bJbC4qVdgUEFw&s',
  },

  {
    id: '2',
    titulo: 'Technology',
    descripcion:
      'Japan  is famous for its modern technology, rich culture and beautiful landscapes. Cities like Tokyo and Osaka are full of life and entertainment.',
    imagen:
      'https://japan-forward.com/wp-content/uploads/2021/07/Society-5.0-7-scaled-e1626452176683.jpg',
  },

  {
    id: '3',
    titulo: 'Tokyo and Osaka',
    descripcion:
      'Tokyo and Osaka are vibrant cities full of culture, technology, restaurants and exciting attractions for visitors.',
    imagen:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/93/a6/d4/caption.jpg?w=2000&h=-1&s=1&cx=960&cy=540&chk=v1_91d7a089c89b5cdbb090',
  },

  {
    id: '4',
    titulo: 'Cherry Blossoms',
    descripcion:
      'During cherry blossom season, parks become very crowded with people having picnics under the trees. Remember to keep public places clean and respect local customs during your visit.',
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIDZ6b5aRiILUKQt63pAJMVpOamrg-kpnc-w&s',
  },

  {
    id: '5',
    titulo: 'Traditions',
    descripcion:
      'In Japan, many people follow traditions influenced by Shintoism and Buddhism. Because of these beliefs, temples and shrines are treated with great respect, so visitors should behave quietly and respectfully when visiting them.',
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9b7g63OPuJ39oKQDFNsFe5tzvPaLn4eUnLQ&s',
  },

  {
    id: '6',
    titulo: 'Tipping',
    descripcion:
      'Tipping is not common in Japan. In some places, leaving extra money may even confuse the staff.',
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-_lgyhQO0_UJLZZnmPcTXn7fYG3Vmk-wDg&s',
  },
];

function Separador() {
  return <View style={styles.separador} />;
}

export default function Main() {
  const [modalVisible, setModalVisible] =
    useState(false);

  const [infoSeleccionada, setInfoSeleccionada] =
    useState(null);

  const abrirModal = (item) => {
    setInfoSeleccionada(item);
    setModalVisible(true);
  };

  return (
    <>
      <FlatList
        data={INFORMACION}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TarjetaInfo
            item={item}
            abrirModal={abrirModal}
          />
        )}
        ItemSeparatorComponent={Separador}
        ListHeaderComponent={() => (
          <>
            <Hero />
            <Galeria />

            <View style={styles.header}>
              <Text style={styles.titulo}>
                Japan Travel Guide
              </Text>
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <Footer />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() =>
          setModalVisible(false)
        }
      >
        <View style={styles.modalFondo}>
          <View style={styles.modal}>
            <Text style={styles.modalTitulo}>
              {infoSeleccionada?.titulo}
            </Text>

            <Text style={styles.modalTexto}>
              {infoSeleccionada?.descripcion}
            </Text>

            <Pressable
              style={styles.boton}
              onPress={() =>
                setModalVisible(false)
              }
            >
              <Text style={styles.botonTexto}>
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#C2185B',
  },

  separador: {
    height: 12,
  },

  modalFondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      'rgba(0,0,0,0.5)',
  },

  modal: {
    width: '80%',
    backgroundColor: '#FFF0F6',
    padding: 20,
    borderRadius: 15,
  },

  modalTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C2185B',
    marginBottom: 10,
  },

  modalTexto: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },

  boton: {
    backgroundColor: '#EC407A',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  botonTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
});