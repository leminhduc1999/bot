import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
          <Text style={styles.title}>Watch</Text>
          <View style={styles.rightOptionWrapper}>
              {/* <ExTouchableOpacity style={styles.btnMyList}>
                  <FontAwesome5Icon name="user-alt" size={20}></FontAwesome5Icon>
              </ExTouchableOpacity>
              <ExTouchableOpacity onPress={this.onPressWatchSearchHandler} style={styles.btnSearch}>
                  <FontAwesome5Icon size={20} name="search"></FontAwesome5Icon>
              </ExTouchableOpacity> */}
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  titleWrapper: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      borderBottomColor: '#ddd',
      borderBottomWidth: 1
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold'
  },
  rightOptionWrapper: {
      flexDirection: 'row'
  },
  btnMyList: {
      height: 40,
      width: 40,
      borderRadius: 50,
      backgroundColor: '#ddd',
      justifyContent: 'center',
      alignItems: 'center'
  },
  btnSearch: {
      marginLeft: 10,
      height: 40,
      width: 40,
      borderRadius: 50,
      backgroundColor: '#ddd',
      justifyContent: 'center',
      alignItems: 'center'
  },
  myWatchList: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      marginBottom: 10,
      borderBottomColor: '#ddd',
      borderBottomWidth: 1
  },
  watchListPreview: {
      flexDirection: 'row'
  },
  watchListItem: {
      height: 30,
      width: 30,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: '#fff',
  }
})