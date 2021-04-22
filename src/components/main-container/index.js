import React from 'react'
import './styles.scss'
import { popularNumber, priceList, Network } from './right-bar-option/data'
import RightBarOption from './right-bar-option/index'
import ContentContainer from '../Content-container/index'
import { data } from '../Content-container/data'
export default function Container() {

    return (
        <div className="main-container">
            <div style={{ width: '100%' }} className="main-content">
                <div className="left-container">

                </div>
                {data.map(item => {
                    return <ContentContainer title={item.title} dec={item.des} />
                })

                }
            </div>
            <div className="right-container">
                <RightBarOption title="Popular Number" data={popularNumber} />
                <RightBarOption title="By Price" data={priceList} />
                <RightBarOption title="Network" data={Network} />
            </div>

        </div>
    )
}
