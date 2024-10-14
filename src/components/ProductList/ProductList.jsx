import React, { useState } from "react";
import "./ProductList.css"
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram"

const products = [
    {id: '1', title: 'Скраб', price: 500, description: 'Скраб для тела'},
    {id: '2', title: 'Крем', price: 250, description: 'Крем для тела'},
    {id: '3', title: 'Соль', price: 430, description: 'Соль для ванны'},
    {id: '4', title: 'Бомбочка', price: 200, description: 'Бомбочка для ванны'},
    {id: '5', title: 'Твердый скраб', price: 500, description: 'Скраб для тела'},
    {id: '6', title: 'Мыло', price: 500, description: 'Мыло для тела'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price

    }, 0)

}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([])
    const {tg} = useTelegram();
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product]
        }

        setAddedItems(newItems)


        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить:  ${getTotalPrice(newItems)}`

            });
        }

    }
    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            
            ))}
        </div>

    );

};

export default ProductList;