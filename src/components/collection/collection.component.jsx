import React from 'react';
import './collection.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

import CollectionsContext from '../../contexts/collections/collections.context';

const CollectionPage = ({ match }) => {
    const collections = React.useContext(CollectionsContext);
    const collection = collections[match.params.collectionId];
    const { title, items } = collection;
    
    return (
        <div className='collection-page'>
            <h2 className='title'> {title} </h2>
            <div className='items'>
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    )
};

export default CollectionPage;