import React from 'react';
import './Detailview.css'

function Detailview(props) {
	let { detail } = props;
	let { data, error, message, pending } = detail;

	// loader
	if (pending){
		return <div className="spinner"></div>;
	}

	// on error
	if (!data || error) {
		return <div className="text-center">{ message }</div>
	}
	let date = new Date(data['start_datetime']).toDateString()
	
	return (
		<div>
			<h1 style={{margin:'30px 0px'}}>Race Detail: <small className="text-muted">{ data.name }</small></h1>

			<table className="table table-striped">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Description</th>
						<th>Start Time</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{data.id}</td>
						<td>{data.name}</td>
						<td>{data.description}</td>
						<td>{date}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
};

export default Detailview;