import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

import {CartContext} from '../../providers/cart.provider';

const CollectionItem = ({ item }) => {

    const { name, price, imageUrl } = item;
    const { addItem } = React.useContext(CartContext);

    return (<div className='collection-item'>
        <div className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}>
        </div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton inverted onClick={() => addItem(item)}>Add To Cart</CustomButton>
    </div>)
};


export default CollectionItem;