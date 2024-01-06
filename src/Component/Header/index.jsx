import { HomeFilled, PhoneFilled } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { useNavigate  } from 'react-router-dom'

const AppHeader = () => {
    const naviage = useNavigate ();
    const onMenuClick = (item)=>{
        naviage(`/${item.key}`)
    }

    return (
        
        <div className='appHeader'>
            <Menu
            onClick={onMenuClick}
            mode='horizontal'
                items={[
                    {
                        label: <HomeFilled />,
                        key: "",
                    },
                    {
                        label: <PhoneFilled />,
                        key: "phone",
                    },
                    {
                        label: "Men",
                        key: "men",
                        children: [
                            {
                                label: 'Men-Shirt',
                                key: 'main-shirt',
                            },
                            {
                                label: 'Men-Shoe',
                                key: 'men-shoe',
                            },
                            {
                                label: 'Men-Coat',
                                key: 'men-coat',
                            },
                        ]
                    },
                    {
                        label: "Women",
                        key: "women",
                        children: [
                            {
                                label: 'Women Dress',
                                key: 'women-dress'
                            },
                            {
                                label: 'Women Shoes',
                                key: 'women-shoe'
                            },
                            {
                                label: 'Women Jacket',
                                key: 'women-jacket'
                            },
                        ]
                    },
                    {
                        label: "Accessories",
                        key: "accessories",
                    },
                ]} />
        </div>
    )
}

export default AppHeader
