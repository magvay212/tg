import React from "react";

const CategoryItem = ({category, className}) => {

    return (
        <div className={'category ' + className}>
            <div className={'title'}>{category.title}</div>
        </div>

    );

};

export default ProductItem;