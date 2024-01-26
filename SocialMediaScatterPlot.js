// src/SocialMediaScatterPlot.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Plotly from 'react-native-plotly';
import { socialMediaData } from './data';

const SocialMediaScatterPlot = () => {
  const data = [{
    x: socialMediaData.map(item => item.platform),
    y: socialMediaData.map(item => item.followers),
    mode: 'markers',
    type: 'scatter',
  }];

  const layout = {
    title: 'Social Media Followers Scatter Plot',
    xaxis: { title: 'Social Media Platforms' },
    yaxis: { title: 'Followers Count' },
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

export default SocialMediaScatterPlot;
