import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import Detailview from './../../components/Detailview/Detailview'
import axios from 'axios';
const CORS_BYPASS = 'https://cors-anywhere.herokuapp.com';
const UPCOMING_RACES_ENDPOINT = 'https://fe-api.smarkets.com/v0/events/id/';
const API_ENDPOINT = `${CORS_BYPASS}/${UPCOMING_RACES_ENDPOINT}`;

const mapStateToProps = (state, ownProps) => {
	return {
		detail: state.detail
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		getEvent: function(id){
			dispatch({
				type: 'GET_DETAIL_DATA',
				payload: axios.get(API_ENDPOINT + id)
			});
		}
	}
};

class DetailviewContainer extends React.Component {
	componentWillMount() {
		var id = this.props.match.params.id;
		this.props.getEvent(id);
	}

	render() {
		return (<Detailview {...this.props} />)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(DetailviewContainer);