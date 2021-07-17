import React from 'react';
import axios from 'axios';


class FriendsList extends React.Component {

    state = { 
        friends: []
    };

    componentDidMount = () => {
        this.getData();
    }

    getData = () => {
        console.log("getting data from server")
        const token = localStorage.getItem("token")
        axios.get("http://localhost:5000/api/friends", {headers: {authorization: token}})
        .then(res => {
            this.setState({ friends: res.data })
            console.log("This is current state: ", this.state);
        })
        .catch(err => console.log(err))
    };

    render() {
        return (
            <p>

            <ul> vvvvvv Friends Below vvvvvv

            </ul>
            </p>
        )
    }


}

export default FriendsList;