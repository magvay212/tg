import React from "react";

const CategoryItem = ({category, className}) => {

    return (
        <div className={'category ' + className}>
            <div className={'img'}/>
            <div className={'title'}>{category.title}</div>
        </div>

    );

};

export default CategoryItem;