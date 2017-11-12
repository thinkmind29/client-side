import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserPage extends Component {
   
    constructor(props){
        super(props);
        localStorage.setItem('user', props.location.state.token);
        this.state = {id: localStorage.getItem('user')}
    }

   componentDidMount() {
     this.props.fetchUser(this.state.id);
   }
   
   render() {
       if(!this.props.user)
            return <p>Loading...</p>

        return (
            <div>
                <h1>{this.props.user.user.name}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state.user);
    return { user: state.user }
};
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ fetchUser }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);