import React from 'react'
import './styles.scss'
export default function Topbar() {
    const menuOption = [{
        name: 'Homepage',
        onclick: () => { }
    },
    {
        name: 'Numbers Search',
        onclick: () => { }
    },
    {
        name: 'Testimonial',
        onclick: () => { }
    },
    {
        name: 'Faq',
        onclick: () => { }
    },
    {
        name: 'Articals',
        onclick: () => { }
    },
    {
        name: 'About us',
        onclick: () => { }
    },
    {
        name: 'Contact us',
        onclick: () => { }
    },
    {
        name: 'Charity',
        onclick: () => { }
    },]
    return (
        <div className="tobar-container">
            {
                menuOption.map(item => {
                    return <div className="option"><p>{item.name}</p></div>
                })
            }


        </div>
    )
}
