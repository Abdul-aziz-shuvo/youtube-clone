import React from 'react'
import './_header.scss'
import {FaBars} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdNotifications,MdApps} from 'react-icons/md'

 const Header = ({toggleSidebar}) => {
    return (
        <div className='border border-dark header'>
           <FaBars className='header__menu' size={26} onClick={toggleSidebar}/>
            <img src="http://pngimg.com/uploads/youtube/youtube_PNG102354.png" alt="avatar" className='header__logo'/>
            <form>
                <input type="text"/>
                <button type='button'></button>
                <AiOutlineSearch size={26}/>
            </form>

            <div className="header__icons">
                <MdNotifications />
                <MdApps/>
                <img src="https://www.pngarts.com/files/5/User-Avatar-PNG-Image.png" alt=""/>
            </div>
        </div>
    )
}
export default  Header
