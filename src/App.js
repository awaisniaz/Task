import React from 'react'
import Topbar from './components/topbar/index'
import Container from './components/main-container/index'
import TopMostBar from './components/topmost-bar/index'
import SecondBar from './components/second-bar/index'
import { HeartFilled, SmileFilled, HomeFilled } from '@ant-design/icons';
import { Button } from 'antd'
import './App.scss'
export default function App() {
    const data = [{
        icon: <HeartFilled />,
        title: 'Good Quality',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'
    },
    {
        icon: <SmileFilled />,
        title: 'After Sales Service',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'
    },
    {
        icon: <HomeFilled />,
        title: 'Making Merit',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'
    }
    ]
    return (
        <div className="mainContainer">
            <TopMostBar />
            <SecondBar />
            <Topbar />
            <Container />

            <div className="first-footer">
                <div className="left-content">
                    <h1>SINGAPORE</h1>
                    <h2>9-946-799</h2>
                    <div className="description">
                        <span>Call our hotline for sales and service enquires</span>
                    </div>
                    <Button>Contact us</Button>

                </div>
                <div className="right-content">
                    <h1 style={{ color: "white" }}>Most trusted for Source for <br /><span style={{ color: "yellow" }}>"Auspicious numbers".</span></h1>
                    {data.map(item => {
                        return <div className="content-footer">
                            <div className="icon-footer">
                                {item.icon}
                            </div>
                            <div className="footer-icon">
                                <h2 style={{ color: 'yellow' }}>{item.title}</h2>
                                <p style={{ color: 'white' }}>{item.desc}</p>
                            </div>
                        </div>
                    })
                    }

                </div>
            </div>
        </div>
    )
}
