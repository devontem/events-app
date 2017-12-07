import React from 'react';
import './Listview.css';

const Listview = function(props) {
	var { list } = props;
	var { data, error, message, pending } = list;

	// loader
	if (pending){
		return <div className="spinner"></div>;
	}

	// on error
	if (!data || error){
		return <div className="text-center">{ message }</div>
	}
	var items = Object.keys(data).map((key) => (
			<tr key={data[key].id} href={'/test'}>
				<td>{data[key].id}</td>
				<td><a href={`/detail/${data[key].id}`}>{data[key].name}</a></td>
			</tr>
		)
	);

	return (
		<div>
			<h1 style={{margin:'30px 0px'}}>Upcoming Events: <small className="text-muted">Horse Racing</small></h1>
			<table className="table table-striped">
		    <thead>
		      <tr>
		        <th>ID</th>
		        <th>Name</th>
		      </tr>
		    </thead>
		    <tbody>
		      {items}
		    </tbody>
		  </table>
		</div>
	);
};

export default Listview;