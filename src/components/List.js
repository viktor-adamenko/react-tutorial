import React, { Component } from "react";
import items from '../data/items';

export default class List extends Component {    
    render() {
        
        const itemList = items.map(i => <li key={i.id} id={i.id}>{i.text}</li>)
     
        return (
            <ul style={{ fontSize: '18pt' }}>
                {itemList}
            </ul>
        )
    }
}