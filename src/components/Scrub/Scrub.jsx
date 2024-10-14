import React, { useCallback, useEffect, useState } from "react";
import "./Scrub.css"
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram"

const products = [
    {id: '1', title: 'Скраб кокосовый', price: 500, description: 'Скраб для тела'},
    {id: '2', title: 'Скраб малиновый', price: 250, description: 'Скраб для тела'},
    {id: '3', title: 'Скраб черничный', price: 430, description: 'Скраб для ванны'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price

    }, 0)

}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([])
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
        }
        fetch('http://localhost:8000', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

    }, [])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }

    }, [onSendData])


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
                    price={price}
                    className={'item'}
                />
            
            ))}
        </div>

    );

};

export default ProductList;