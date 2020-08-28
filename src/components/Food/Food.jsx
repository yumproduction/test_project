import React from 'react';
import cn from 'classnames'

import classes from './../../scss/components/food.module.scss'

import cat from './../../assets/images/cat.png'


const Food = (props) => {

    let food = props.meal.food.map((f, index) => <div onMouseEnter={() => props.setHovered(f.id, true)}
        onMouseLeave={() => props.setHovered(f.id, false)} onClick={() => f.inStock && props.setSelected(f.id)} key={`${f}_${index}`}
        className={cn(classes.food,
            {[classes.disable]: f.inStock === false,
                [classes.select]: f.selected === true
            })}>
        <div className={classes.food_container}>
            <div className={classes.food_head}>
                <p className={f.selected && f.hovered ? classes.hover : ''}>{f.selected && f.hovered ? 'Котэ не одобряет?' : 'Сказочное заморское'}</p>
                <h1>Нямушка</h1>
                <h2>с {f.name}</h2>
                <p>{f.portionCount} порций {f.mouseCount} в подарок</p>
            </div>
            <div className={classes.count}>
                <div className={classes.circle}>
                    <div className={classes.weigth}>
                        <h1>{f.weigth}</h1>
                        <h2>кг</h2>
                    </div>
                </div>
                <img src={cat} alt="" />
            </div>
        </div>
        <div className={classes.description}>
            {!f.inStock ? <p className={classes.dis_description}>Печалька, с {f.name} закончился.</p> : f.selected ? <p>{f.description}</p> : <p>Чего сидишь? Порадуй котэ, <a href="#s">купи</a></p>}
        </div>
    </div>)

    return <div className={classes.mainPage} id={classes.cover}>
        <div className={classes.back}>
            <div className={classes.gradient}>

            </div>
        </div>
        <div className={classes.head}>
            <h1>Ты сегодня покормил кота?</h1>
        </div>
        <div className={classes.meal}>
            {food}
        </div>
    </div>
}

export default Food;