import React from "react";
import PropTypes from 'prop-types';
 
const CategoryItem = ({category, className}) => {

    return (
        <div className='category-item'>
            <img src={category.image} alt={category.title} className='category-image' />
        </div>
        //<div className={'category ' + className}>
        //    <div className={'img'}>{category.Image}</div>
        //    <div className={'title'}>{category.title}</div>
        //</div>

    );

};

CategoryItem.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default CategoryItem;