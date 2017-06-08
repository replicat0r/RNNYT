import React, {PropTypes} from 'react';
import {StyleSheet, Text} from 'react-native';

import AppText from './AppText';
import SmallText from './SmallText'

import * as globalStyles from '../styles/global';

const Byline = () =>{
  <View>
    <View styles= {styles.row}>
      <SmallText>
        {date.toLocaleDateString()}
      </SmallText>
      <SmallText>{author}</SmallText>
    </View>
    {location ? (
      <View style={styles.row}>
        <SmallText style={styles.location}>{location}</SmallText>
      </View>
    ) : null
    }
  </View>
}

Byline.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  author: PropTypes.string.isRequired,
  location: PropTypes.string
}

const styles = Stylesheet.create({
  row: {
    flexDirection: 'row'
    justifyContent: 'space-between',
    marginBottom:5
  },
  location: {
    color:globalStyles.MUTED_COLOR
  }
})
