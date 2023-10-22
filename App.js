import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground} from 'react-native';
import {Notification, Receipt21, Clock, Message} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TARKIPAN ( Seni Rupa Pakarena )</Text>
      </View>
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        </ScrollView>
      </View>
      <ListBlog />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 28,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:50,
    elevation: 8,
    paddingTop:8,
    paddingBottom:0
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 5,
  },
  listBlog: {
    paddingVertical: 5,
    gap: 19,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal:5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
})
const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 15}}>
          <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://koransulindo.com/wp-content/uploads/2021/10/DSC_2480-640x425.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Pengertian Seni Tari Kipas Pakarena
                  </Text>
                </View>
                <View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://asset.kompas.com/crops/a8uKTNgMoizbS_fD6lPAW6rAJAs=/15x9:395x262/750x500/data/photo/2021/02/02/6018fba2ece05.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                  Sejarah Dalam Seni Tari Kipas Pakarena
                  </Text>
                </View>
                <View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://asset-2.tstatic.net/pontianak/foto/bank/images/tari-kipas-dari-gowa-sulawesi-selatan-lambang-kelembutan.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Bahan Dan Warna Pakaian Dari Seni Tari Pakarena
                  </Text>
                </View>
                <View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2021/09/29221704/Tari-Kipas-Pakarena-2.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Fan Dance Art</Text>
                  <Text style={itemVertical.cardTitle}>
                    Jenis-jenis Tarian Yang ada Di sulawesi Selatan
                  </Text>
                </View>
                <Receipt21
                />
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://asset.kompas.com/crops/--h_QiGLXZ3g5Sg0WXkbRSqTIns=/0x0:961x641/750x500/data/photo/2021/09/27/6151ee3e6c5a1.png',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Fan Dance Art</Text>
                  <Text style={itemVertical.cardTitle}>
                    Sejarah Dari Seni Tarian Pakarena
                  </Text>
                </View>
                <Receipt21
                />
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://asset.kompas.com/crops/R_OfP0N9ZgWJtEXrOiaxt4X0bOU=/0x0:5616x3744/750x500/data/photo/2022/02/26/6219b303bfd8b.jpeg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Fan Dance Art</Text>
                  <Text style={itemVertical.cardTitle}>
                    Penjelasan Tari-tarian Yang ada Di Sulawesi Selatan
                  </Text>
                </View>
                <Receipt21
                />
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://akcdn.detik.net.id/community/media/visual/2023/03/13/tari-pakarena_169.jpeg?w=700&q=90',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Fan Dance Art</Text>
                  <Text style={itemVertical.cardTitle}>Makna Tarian Kipas Pakarena</Text>
                </View>
                <Receipt21
                />
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/Tari-Kipas-Pakarena.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Fan Dance Art</Text>
                  <Text style={itemVertical.cardTitle}>
                    Ciri Khas Tari Kipas Pakarena
                  </Text>
                </View>
                <Receipt21
                />
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Fan Dance Art</Text>
                  <Text style={itemVertical.cardTitle}>
                    Asal Usul Tarian Kipas Pakarena
                  </Text>
                </View>
                <Receipt21
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});