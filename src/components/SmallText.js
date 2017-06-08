import React , {PropTypes} from 'react';
import {StyleSheet,Text} from 'react-native';

import AppText from './AppText';
import * as globalStyles from '../styles/global';

const SmallText = ({children, style, ...rest}) => {
  return <AppText style = {[styles.small,style]} {...rest}> {children} </AppText>
};

SmallText.propTypes = {
  style: Text.propTypes.stylem
  children: PropTypes.node
}

const styles = StyleSheet.create({
  small: {
    fontSize: 11
  }
});

export default SmallText;
