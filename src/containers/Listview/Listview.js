import React, { Component } from 'react'
import { connect } from 'react-redux';
import Listview from './../../components/Listview/Listview';
import axios from 'axios';
const CORS_BYPASS = 'https://cors-anywhere.herokuapp.com';
const UPCOMING_RACES_ENDPOINT = 'https://smarkets.com/v0/listings/slug/sport/horse-racing/?period=upcoming';
const API_ENDPOINT = `${CORS_BYPASS}/${UPCOMING_RACES_ENDPOINT}`;

// send only certain state properties to props
const mapStateToProps = (state, ownProps) => {
	return {
		list: state.list
	};
};

// setup dispatch functions as prop methods
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		getEvents: function(){
			dispatch({
				type: 'GET_LIST_DATA',
				payload: axios.get(API_ENDPOINT)
			});
		}
	}
};


class ListviewContainer extends Component {
	componentWillMount() {
		this.props.getEvents();
	}

	render() {
		return (<Listview { ...this.props } />)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListviewContainer);