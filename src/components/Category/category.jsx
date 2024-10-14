import React, {useState} from "react";
import {useTelegram} from "../../hooks/useTelegram"

const Categorylist = [
    {id: '1', title: 'Скрабы'},
    {id: '2', title: 'Уходовая косметика'},
    {id: '3', title: 'Ароматерапия'},
    {id: '4', title: 'Свечи'},
    {id: '5', title: 'Мыло'},
    {id: '6', title: 'Для волос'},
    {id: '7', title: 'Для дома'},
    {id: '8', title: 'Сезонное предложение'},
]


const Category = () => {
    const [addedItems, setAddedItems] = useState([])
    const {tg} = useTelegram();

    return (
        <div className={'list'}>
            {Categorylist.map(item => (
                <Category Categorylist={item}
                    className={'item'}
                />
            
            ))}
        </div>

    );

};

export default ProductList;