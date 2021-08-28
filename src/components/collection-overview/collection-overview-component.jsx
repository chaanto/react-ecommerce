import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectListtCollections } from '../../redux/shop/shop-selector';

import CollectionPreview from '../preview-collection/preview-collection-component';
import './collection-overview-style.scss';

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {collections.map(({ id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectListtCollections
});


export default connect(mapStateToProps)(CollectionOverview);
