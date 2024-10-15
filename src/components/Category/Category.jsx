import React from "react";
import "./Category.css"
import CategoryItem from "../CategoryItem/CategoryItem";


const catlist = [
    {id: '1', title: 'Скрабы', image: 'src/components/Category/img/scrub.jpg'},
    {id: '2', title: 'Уходовая косметика', image: 'src/components/Category/img/skincare.jpg'},
    {id: '3', title: 'Ароматерапия', image: 'src/components/Category/img/aromatherapy.jpg'},
    {id: '4', title: 'Свечи', image: 'src/components/Category/img/candles.jpg'},
    {id: '5', title: 'Мыло', image: 'src/components/Category/img/soap.jpg'},
    {id: '6', title: 'Для волос', image: 'src/components/Category/img/hair.jpg'},
    {id: '7', title: 'Для дома', image: 'src/components/Category/img/home.jpg'},
    {id: '8', title: 'Сезонное предложение', image: 'src/components/Category/img/seasonal.jpg'},
];


const CategoryList = () => {

    return (
        <div className={'list'}>
            {catlist.map(item => (
                <CategoryItem
                    category={item}
                    className={'item'}
                />
            
            ))}
        </div>

    );

};

export default CategoryList;