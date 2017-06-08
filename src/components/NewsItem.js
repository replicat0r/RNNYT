import React, {Component, PropTypes} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'

import Thumbnail from './Thumbnail'
import Byline from './Byline'
import AppText from './AppText'
import * as globalStyles from '../styles/global';

export default class NewsItem extends Component {
  render() {
    const {
      style,
      imageUrl,
      title,
      author,
      date,
      location,
      description
    } = this.props;
    const accentColor = globalStyles.ACCENT_COLORS[this.props.index % globalStyles.ACCENT_COLORS.length]
    return (
      <TouchableOpacity style={style}>
        <Thumbnail url={imageUrl} titleText={title} accentColor={accentColor} style={styles.Thumbnail}/>

        <View styles={styles.content}>
          <Byline author={author} date={date} location ={location}/>
          <AppText>
            {description}</AppText>
        </View>
      </TouchableOpacity>
    )
  }
}
NewsItem.propTypes ={
  style: View.PropTypes.style,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  author: PropTypes.string.isRequired,
  location:PropTypes.string,
  onPress: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}

const styles = Stylesheet.create({
  thumbnail: {
    marginBottom: 5
  },
  content: {
    paddingHorizontal: 5
  }
})
