import React, { Component } from 'react';
import { Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';


class OffersItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, index, onPressItem } = this.props;
    return (
      <TouchableOpacity
        onPress={onPressItem}
        style={
          index === 0 ? [styles.container, { marginTop: 10 }] : styles.container
        }
      >
        <ImageBackground
          style={styles.image}
          source={{ uri: item.urls.small }}
        >
          <Text style={styles.title}>{item.alt_description}</Text>
          <Text style={styles.title1}>(author: {item.user.name})</Text>
        </ImageBackground>
      </TouchableOpacity>

    );
  }
}

export default OffersItem;
