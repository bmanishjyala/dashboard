import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReportIcon from '@mui/icons-material/Report';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ReorderIcon from '@mui/icons-material/Reorder';
export default function Topbar() {

  return (
    <div className='topbar'>
      
        <div className='topLeft d-flex align-items-center justify-content-center'><a class="btn  open" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
 <ReorderIcon />
</a>CodeFox</div>
        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Dashboard</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                <li className='sidebarListItem active'>
                    <LineStyleIcon className='sidebarIcon' />
                    Home
                </li>
                <li className='sidebarListItem'>
                    <TimelineIcon className='sidebarIcon' />
                    Analytics
                </li>
                <li className='sidebarListItem'>
                    <TrendingUpIcon className='sidebarIcon' />
                    Sales
                </li>
            </ul>
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
                <li className='sidebarListItem '>
                    <PersonIcon className='sidebarIcon' />
                    Users
                </li>
                <li className='sidebarListItem'>
                    <Inventory2Icon className='sidebarIcon' />
                    Products
                </li>
                <li className='sidebarListItem'>
                    <CurrencyExchangeIcon className='sidebarIcon' />
                    Transactions
                </li>
            </ul>
            <h3 className="sidebarTitle">Notification</h3>
            <ul className="sidebarList">
                <li className='sidebarListItem '>
                    <MailOutlineIcon className='sidebarIcon' />
                    Mail
                </li>
                <li className='sidebarListItem'>
                    <DynamicFeedIcon className='sidebarIcon' />
                    Feedback
                </li>
                <li className='sidebarListItem'>
                    <ChatBubbleOutlineIcon className='sidebarIcon' />
                    Messages
                </li>
            </ul>
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                <li className='sidebarListItem '>
                    <ManageAccountsIcon className='sidebarIcon' />
                   Manage
                </li>
                <li className='sidebarListItem'>
                    <ReportIcon className='sidebarIcon' />
                    Reports
                </li>
                
            </ul>
        </div>
    
  </div>
</div>
        <div className='topRight'>
            <div className='notification '>
            <NotificationsIcon  className='fs-3'/>
             <span className='topIconBadge'>2</span>
            </div>
            <div className='notification'>
            <LanguageIcon className='fs-3' />
            </div>
            <div className='notification'>
            <SettingsIcon className='fs-3' />
            </div>
            <img src="https://www.svgrepo.com/show/9695/avatar.svg" alt="" className='topAvatar' />
        </div>
    </div>
  )
}
