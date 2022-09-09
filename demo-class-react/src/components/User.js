import { Component } from 'react';
import classes from './User.module.css';

class User extends Component {
  componentWillUnmount(){
    console.log("user unmounted")
  }
  constructor(){
    super()
    this.state = {} // in class based components state is a object(not anything like we have in functional components)
  }
  render() {
    return (
      <li className={classes.user}>{this.props.name}</li>
    )
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
