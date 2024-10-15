import React from "react";
import "./Category.css"
import CategoryItem from "../CategoryItem/CategoryItem";
import "./img"

const catlist = [
    {id: '1', title: 'Скрабы', Image: './img/cat_scrub.jpg'},
    {id: '2', title: 'Уходовая косметика', Image: './img/cat_cosm.jpg'},
    {id: '3', title: 'Ароматерапия', Image: './img/cat_aroma.jpg'},
    {id: '4', title: 'Свечи', Image: './img/cat_light.jpg'},
    {id: '5', title: 'Мыло', Image: './img/cat_soup.jpg'},
    {id: '6', title: 'Для волос', Image: './img/cat_hear.jpg'},
    {id: '7', title: 'Для дома', Image: './img/cat_house.jpg'},
    {id: '8', title: 'Сезонное предложение', Image: './img/cat_house.jpg'},
]


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