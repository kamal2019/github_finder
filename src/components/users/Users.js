import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users:[
                {
                    id:'id',
                    login:'Pawan',
                    avatar_url:'https://avatars.githubusercontent.com/u/46804071?v=4',
                    html_url:'https://github.com/devpawann'
                },
                {
                    id:'id',
                    login:'Nitesh',
                    avatar_url:'https://avatars.githubusercontent.com/u/31273031?v=4',
                    html_url:'https://github.com/devpawann'
                },
                {
                    id:'id',
                    login:'Kamal',
                    avatar_url:'https://avatars.githubusercontent.com/u/47470542?v=4',
                    html_url:'https://github.com/devpawann'
                }
            ]
        }
    }
    
    render() {
        return (
            <div style = {UserStyle}>
                {this.state.users.map(user=>(
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}
const UserStyle={
    display :'grid',
    gridTemplateColumns :'repeat(3,1fr)',
    gridGap :'1rem'
}
export default Users
