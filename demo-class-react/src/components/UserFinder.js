import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';

import classes from "./UserFinder.module.css";
import UserContext from '../store/user-context';
import ErrorBoundary from './ErrorBoundary';

// const DUMMY_USERS = [
//     { id: 'u1', name: 'Max' },
//     { id: 'u2', name: 'Manuel' },
//     { id: 'u3', name: 'Julie' },
//   ];

class UserFinder extends Component {
    static contextType = UserContext;


    constructor() {
        super()
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        console.log("context", this.context)
        // http request here to fetch data from api
        this.setState({ filteredUsers: this.context.users });
        console.log("mount")
    }

    componentDidUpdate(prevProps, PrevState) {
        if (PrevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.toLowerCase().includes(this.state.searchTerm))
            })
        }
    }

    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value.toLowerCase() })
    }

    render() {
        console.log("render")
        return (
            <Fragment>
                <div className={classes.finder} >
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.toLowerCase().includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value.toLowerCase());
//   };

//   return (
//     <Fragment>
//         <div className={classes.finder} >
//         <input type='search' onChange={searchChangeHandler} />
//         </div>

//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;