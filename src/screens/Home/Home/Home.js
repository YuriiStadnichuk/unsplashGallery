import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import DefaultHeader from '../../../components/Headers/DefaultHeader';
import { OffersItem } from '../../../components/ListItems';
import styles from './styles';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchGalleryListing();
  }

  render() {
    const { navigation } = this.props;


    return (
      <View style={styles.container}>
        <DefaultHeader navigation={navigation} centralItem={'Gallery'} />
        <FlatList
          data={this.props.gallery}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <OffersItem
              item={item}
              index={index}
              onPressItem={() => {
                navigation.navigate('Offers', {
                  screen: 'Offers',
                  params: {
                    photo: item
                  },
                });
              }}
            />
          )}
        />
      </View>
    );
  }
}

export default Home;
