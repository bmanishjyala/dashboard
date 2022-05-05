import React from 'react'
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


export default function Sidebar() {
  return (
    <div className='sidebar'>
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
  )
}
