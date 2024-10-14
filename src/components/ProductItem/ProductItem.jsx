import React from "react";

import Button from "../Button/Button";

const ProductItem = ({product, className, price}) => {
    const onAddHandler = () => {
        price(product);

    }
    return (
        <div className={'product ' + className}>
            <div className={'img'}/>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <Button className={'price'} onAdd={onAddHandler}>
                <span>{product.price}</span>
            </Button>
        </div>

    );

};

export default ProductItem;
