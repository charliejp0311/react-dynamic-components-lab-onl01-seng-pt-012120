//your code here
import React, {Component} from 'react'
export default class Comment extends React.Component {
    render() {
        return ( 
            <div > 
                {this.props.commentText} 
            </div>
        )
    }
}