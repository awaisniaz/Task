import React from 'react'
import './styles.scss'
import { StarFilled } from '@ant-design/icons';
export default function RightBarOption(props) {
    const { title, data } = props
    return (
        <div className="option-container">
            <div className="title-container">
                <StarFilled /> {title}
            </div>
            <div className="list-container">
                <ul>
                    {data.map(item => {
                        return <li style={{ margin: '10px 0' }}>{item.name}</li>
                    })}
                </ul>

            </div>

        </div>
    )
}
