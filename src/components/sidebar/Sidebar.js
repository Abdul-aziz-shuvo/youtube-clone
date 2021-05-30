import React from 'react'
import './_sidebar.scss';
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied
} from 'react-icons/md'
const Sidebar = ({sidebar,toggleSidebar}) => {
    return (
        <nav className={sidebar ? 'sidebar open' : 'sidebar'} onClick={toggleSidebar}>
           <li>
               <MdHome size={23}/>
               <span>Home</span>
           </li>
            <li>
                <MdSubscriptions size={23}/>
                <span>Subscription</span>
            </li>
            <li>
                <MdThumbUp size={23}/>
                <span>Like</span>
            </li>
            <li>
                <MdHistory size={23}/>
                <span>History</span>
            </li>
            <li>
                <MdLibraryBooks size={23}/>
                <span>Library</span>
            </li>
            <li>
                <MdSentimentDissatisfied size={23}/>
                <span>ff</span>
            </li>
            <li>
                <MdExitToApp size={23}/>
                <span>Log Out</span>
            </li>
            <hr/>
        </nav>
    )
}

export default Sidebar