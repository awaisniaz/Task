import React from 'react'
import './styles.scss'
import { SmileOutlined } from '@ant-design/icons';
import { Button } from 'antd'
export default function SecondBar() {
    return (
        <div className="second-bar-container">
            <div className="option-container-header">
                <div className="text1">
                    <span>
                        Auspicious numbers to power better outcome
                    </span>
                </div>
                <div className="icon">
                    <SmileOutlined />
                </div>
                <div className="text2">
                    <span>Make Merit when buying numbers here</span>
                    <span>All revenue will be shared with Charity</span>

                </div>
                <div className="personal-consultaion">
                    <Button> Personal Consultaion</Button>
                </div>
            </div>


        </div>
    )
}
