import React from 'react'
import SideBar from '../../components/Sidebar'
import { MyConnections, TopBar } from '@/components'

const MyConnectionsPage = () => {
  return (
    <div>
        <SideBar/>
        <TopBar/>
        <MyConnections/>
    </div>
  )
}

export default MyConnectionsPage