import React, {useState, useEffect} from 'react';

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import '../styles/SidebarStyles.css';
import EditIcon from '@material-ui/icons/Edit';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DehazeIcon from '@material-ui/icons/Dehaze';
import HomeIcon from '@material-ui/icons/Home';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import CategoryIcon from '@material-ui/icons/Category';

export default (props) => {
    const [collapsed, setCollapsed] = useState(true)

    useEffect(() => {
        setCollapsed(true)
    }, [])

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const pushToManagePage = () => {
        props.history.push('/profile/manage')
    }

    const pushToCreatePage = () => {
        props.history.push('/profile/createpost')
    }

    const pushToHomePage = () => {
        props.history.push('/profile')
    }

    const pushToCreateCategoryPage = () => {
        props.history.push('/profile/createcategory')
    }

    const pushToShowCategoryPage = () => {
        props.history.push('/profile/showcategory')
    }

    return (
        <ProSidebar
        style={{backgroundColor: 'white'}}
        collapsed={collapsed}
        >
            <Menu iconShape="circle">
                <MenuItem icon={<DehazeIcon/>} onClick={() => toggleCollapsed()}>
                </MenuItem>
            </Menu>
            <Menu iconShape="circle">
                <MenuItem icon={<HomeIcon/>} onClick={() => pushToHomePage()}>
                    <h3> Home</h3>
                </MenuItem>
                <MenuItem icon={<AddBoxIcon/>} onClick={() => pushToCreatePage()}>
                    <h3 >Create Post</h3>
                </MenuItem>
                <MenuItem icon={<CategoryIcon/>} onClick={() => pushToShowCategoryPage()}>
                    <h3 >Pluck by Category</h3>
                </MenuItem>
                <MenuItem icon={<LoyaltyIcon/>} onClick={() => pushToCreateCategoryPage()}>
                    <h3 >Create Category</h3>
                </MenuItem>
                <MenuItem icon={<EditIcon/>} onClick={() => pushToManagePage()}>
                    <h3 >Manage Posts</h3>
                </MenuItem>
            </Menu>
        </ProSidebar>
    )
}
