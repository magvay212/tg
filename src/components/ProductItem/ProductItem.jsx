import React from "react";

import Button from "../Button/Button";

const ProductItem = ({product, className, onAdd}) => {
    const onAddHandler = () => {
        onAdd(product);

    }
    return (
        <div className={'product ' + className}>
            <div className={'img'}/>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <Button className={'price'} onClick={onAddHandler}>
                <span>{product.price} RUB</span>
            </Button>
        </div>

    );

};

export default ProductItem;
