// export {default} from './Home';
import View from './Home';

import { connect } from 'react-redux';

import { homeActions, homeSelectors } from 'store/Home';

const mapStateToProps = state => ({
  isLoading: homeSelectors.isLoading(state),
  gallery: homeSelectors.gallery(state),
 
});

const mapDispatchToProps = dispatch => ({
  fetchGalleryListing: () => dispatch(homeActions.fetchGalleryListing()),
  

});

export default connect(mapStateToProps, mapDispatchToProps)(View);
