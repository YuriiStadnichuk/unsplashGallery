import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { icons } from '../../../constants';
import styles from './styles';
console.log(icons)
class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { ...props } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.leftBlock}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text style={styles.back}>{props.leftItem}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.centralBlock}>
          <Text style={styles.title}>{props.centralItem}</Text>
        </View>

      </View>
    );
  }
}

export default DefaultHeader;
