// src/SocialMediaPieChart.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Plotly from 'react-native-plotly';
import { socialMediaData } from './data';

const SocialMediaPieChart = () => {
  const data = [{
    labels: socialMediaData.map(item => item.platform),
    values: socialMediaData.map(item => item.followers),
    type: 'pie',
  }];

  const layout = {
    title: 'Social Media Followers Distribution',
  };

  return (
    <View style={styles.container}>
      <Plotly data={data} layout={layout} style={styles.plotlyContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plotlyContainer: {
    flex: 1,
    width: '100%',
  },
});

export default SocialMediaPieChart;
