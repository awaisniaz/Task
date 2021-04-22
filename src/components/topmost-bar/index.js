import React from 'react'
import './styles.scss'
import { Divider } from 'antd';
import { MailFilled, PhoneFilled } from '@ant-design/icons';
export default function TopMostBar() {
    return (
        <div className="top-bar-container">
            <div className="logo">
                <h1>漢語</h1>
                <h6> WWW.HOBEI.CO</h6>
            </div>
            <div className="contact">
                <div className="email">
                    <MailFilled />
                    <span> info@hobei.sg</span>
                </div>
                <div className="phone-no">
                    <PhoneFilled />
                    <div className="number">
                        <span>Singapore : (+65) 238-9999</span>
                        <span>Malaysia : (+60) 238-9999</span>
                    </div>

                </div>
                <div className="lang">
                    <span style={{ fontWeight: 'bold' }}> English</span>
                    <Divider type="vertical" />
                    <span>漢語</span>
                </div>
            </div>
        </div>
    )
}
