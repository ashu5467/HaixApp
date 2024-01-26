// App.js
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SocialMediaChart from './SocialMediaChart';
import SocialMediaLineChart from './SocialMediaLineChart';
import SocialMedia3DScatterPlot from './SocialMedia3DScatterPlot';
import SocialMediaPieChart from './SocialMediaPieChart';
import SocialMediaScatterPlot from './SocialMediaScatterPlot';
import SocialMediaPercentageBar from './SocialMediaPercentageBar';
import SocialMediaFollowersCount from './SocialMediaFollowersCount';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <SocialMediaFollowersCount />
        <SocialMediaPercentageBar />
        <SocialMediaChart /> 
        <SocialMediaLineChart />
        <SocialMedia3DScatterPlot />
        <SocialMediaPieChart />
        <SocialMediaScatterPlot />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});

export default App;
