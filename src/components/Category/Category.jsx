import React from "react";
import "./Category.css"
import CategoryItem from "../CategoryItem/CategoryItem";

import scrubImg from './image/scrub.jpg';
import skincareImg from './image/skincare.jpeg';
import aromatherapyImg from './image/aromatherapy.jpg';
import candlesImg from './image/candles.jpg';
import soapImg from './image/soapImg'
import hairImg from './image/hair.jpg';
import homeImg from './image/home.jpeg';
import seasonalImg from './image/seasonal.jpg';
const catlist = [
    {id: '1', title: 'Скрабы', image: scrubImg},
    {id: '2', title: 'Уходовая косметика', image: skincareImg},
    {id: '3', title: 'Ароматерапия', image: aromatherapyImg},
    {id: '4', title: 'Свечи', image: candlesImg},
    {id: '5', title: 'Мыло', image: soapImg},
    {id: '6', title: 'Для волос', image: hairImg},
    {id: '7', title: 'Для дома', image: homeImg},
    {id: '8', title: 'Сезонное предложение', image: seasonalImg},
];


const CategoryList = () => {

    //return (
    //    <div className={'list'}>
    //        {catlist.map(item => (
    //            <CategoryItem
    //                category={item}
    //                className={'item'}
    //            />
            
    //        ))}
    //    </div>

    //);
    return (
        <div className="category-list">
            {catlist.map(category => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};






export default CategoryList;