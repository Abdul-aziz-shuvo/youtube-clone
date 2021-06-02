import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import "./_categories.scss"
import {categoryBarAction} from '../../redux-store/actions/vidoes.action'
const  CategoriesBar = () => {

    const keywords = [
        'All',
        'React js',
        'Angular js',
        'React Native',
        'use of API',
        'Redux',
        'Music',
        'Algorithm Art ',
        'Guitar',
        'Bengali Songs',
        'Coding',
        'Cricket',
        'Football',
        'Real Madrid',
        'Gatsby',
        'Poor Coder',
        'Shwetabh',
    ]

    const [active,setActive] = useState('All');
    const distpatch = useDispatch()
    const handleClick = (value) => {

        setActive(value)
        distpatch(categoryBarAction(value))
    }




    return (
        <div className='categoriesBar'>
            {keywords.map((value, i) => (
                <span key={i} onClick={() => handleClick(value)}
                   className={active === value ? 'active' : ''}>{value}</span>
            ))}
        </div>
    )
}
export default CategoriesBar
