import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyles } from '../utils/data/styles'
import { useState } from 'react'
import ResultItem from '../components/ResultItem'
import { surveys } from '../utils/data/data'

const ResultsScreen = () => {
  const [results, setResults] = useState(surveys)
  return (
    <SafeAreaView style={[appStyles.container]}>
    
    <FlatList
      contentContainerStyle={styles.searchResultsContainer}
      scrollEventThrottle={150}
      onEndReachedThreshold={2}
      onEndReached={() => {}}
      data={results}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({item}) => (
        <ResultItem data={item}/>
      )}
      ListEmptyComponent={<View/>}
    />


  </SafeAreaView>
  )
}

export default ResultsScreen

const styles = StyleSheet.create({})