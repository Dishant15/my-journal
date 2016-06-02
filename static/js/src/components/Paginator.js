import React from 'react';

export default class Paginator extends React.Component {
	render(){
		return(
			<ul class="pager">
                <li class="next">
                    <a href="#">Older Posts &rarr;</a>
                </li>
            </ul>
		);
	}
}