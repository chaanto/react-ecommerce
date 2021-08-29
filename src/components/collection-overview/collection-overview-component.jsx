import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectListtCollections } from '../../redux/shop/shop-selector';

import CollectionPreview from '../preview-collection/preview-collection-component';
import CollectionsOverviewContainer from './collection-overview-style';

const CollectionOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectListtCollections
});


export default connect(mapStateToProps)(CollectionOverview);
