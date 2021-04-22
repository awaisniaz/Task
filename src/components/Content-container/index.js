
import React from 'react'
import './styles.scss'
export default function ContentContainer(props) {
    return (
        <div className="content-main-container">
            <div className="title-header">
                <h1>{props.title}</h1>
                <div className="sperator"></div>
                <h2>Power of Influence</h2>
                <div className="progress-bar"></div>
            </div>
            <div className="content">
                {props.dec}
            </div>

        </div>
    )
}
