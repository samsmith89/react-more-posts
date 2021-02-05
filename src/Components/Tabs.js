import { Fragment, Component, useState, useEffect } from "@wordpress/element";
import All from './Categories/All';
import PressReleases from './Categories/PressReleases';

function Tabs(props) {
	function createURL(postPerPage = 4) {
		const urlBase = `/wp-json/wp/v2/`;
		let url = `${urlBase}posts/?&per_page=${postPerPage}&_embed`;
		return url;
	}

	return (
		<Fragment>
			<All createURL={createURL(4)} postPerPage={4} />
			<h1>Different</h1>
			<PressReleases catId={4} />
		</Fragment>
	)
};

export default Tabs;