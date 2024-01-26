// src/SocialMediaPercentageBar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Plotly from 'react-native-plotly';
import { socialMediaData } from './data';

const SocialMediaPercentageBar = () => {
  const totalFollowers = socialMediaData.reduce((sum, item) => sum + item.followers, 0);

  const data = [{
    x: socialMediaData.map(item => item.platform),
    y: socialMediaData.map(item => (item.followers / totalFollowers) * 100),
    type: 'bar',
    marker: { color: '#3498db' },
  }];

  const layout = {
    title: 'Social Media Followers Percentage Bar',
    xaxis: { title: 'Social Media Platforms' },
    yaxis: { title: 'Percentage' },
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

export default SocialMediaPercentageBar;
