import React, {useState} from 'react'
import "./_categories.scss"
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

    const handleClick = (value) => {

        setActive(value)
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
