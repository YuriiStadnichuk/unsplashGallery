import React, { Component } from 'react';
import { View, Image } from 'react-native';
import DefaultHeader from '../../../components/Headers/DefaultHeader';

import styles from './styles';

class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { navigation, route } = this.props;

    return (
      <View style={styles.container}>
        <DefaultHeader navigation={navigation}
          leftItem={'<--'}
          centralItem={`${route.params.photo.alt_description} 
        (author: ${route.params.photo.user.username})`
          } />

        <View style={styles.center}>
          <Image
            style={styles.image}
            source={{ uri: route.params.photo.urls.regular }} />
        </View>
      </View>

    );
  }
}

export default Offers;
