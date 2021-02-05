import { Fragment, Component, useState, useEffect } from "@wordpress/element";
import All from './Categories/All';
import PressReleases from './Categories/PressReleases';

function Tabs(props) {
	const [posts, setPosts] = useState({
		all: [],
		pressReleases: []
	});
	const [offsetPostCount, setOffsetPostCount] = useState(0);

	async function loadPosts(cat = null) {
		let url = createURL();
		if (offsetPostCount >= 1) {
			url = `${url}&offset=${offsetPostCount}`;
		}

		const response = await fetch(url);
		if (!response.ok) {
			return;
			console.log("oops");
		}

		const newPosts = await response.json();
		if (newPosts.length >= 1) {
			const poop = posts.all.concat(newPosts);
			setPosts({ all: poop });
			setOffsetPostCount(newPosts.length + offsetPostCount);;
		}
	}

	useEffect(() => {
		loadPosts();
	}, [setPosts, setOffsetPostCount])

	function createURL(postPerPage = 4, cat) {
		const urlBase = `/wp-json/wp/v2/`;
		let url;
		if (cat) {
			return url = `${urlBase}posts/?categories=${cat}&per_page=${postPerPage}&_embed`;
		}
		return url = `${urlBase}posts/?&per_page=${postPerPage}&_embed`;


	}

	return (
		<Fragment>
			<All posts={posts.all} loadPosts={loadPosts} />
			<h1>Different</h1>
			{/* <PressReleases catId={4} /> */}
		</Fragment>
	)
};

export default Tabs;