import { Fragment, Component, useState, useEffect } from "@wordpress/element";
import All from './Categories/All';
import PressReleases from './Categories/PressReleases';

function Tabs(props) {
	const [posts, setPosts] = useState({
		all: {
			catId: null,
			posts: []
		},
		pressReleases: {
			catId: 2,
			posts: []
		}
	});
	const [offsetPostCount, setOffsetPostCount] = useState(0);

	async function loadPosts() {
		let final = {};
		for (const type in posts) {
			let url = createURL(4, posts[type].catId);
			console.log(url);
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
				let copy = posts;
				copy[type]['posts'] = newPosts;
				console.log(copy);
				final = { ...copy };
			}
		}
		setPosts({ ...final });
		// setOffsetPostCount(newPosts.length + offsetPostCount);
	}

	useEffect(() => {
		loadPosts();
	}, [setPosts, setOffsetPostCount])

	function createURL(postPerPage = 4, catId = null) {
		const urlBase = `/wp-json/wp/v2/`;
		let url;
		if (catId) {
			return url = `${urlBase}posts/?categories=${catId}&per_page=${postPerPage}&_embed`;
		}
		return url = `${urlBase}posts/?per_page=${postPerPage}&_embed`;


	}

	return (
		<Fragment>
			<All postsInfo={posts.all} loadPosts={loadPosts} />
			<h1>Different</h1>
			<PressReleases postsInfo={posts.pressReleases} loadPosts={loadPosts} />
		</Fragment>
	)
};

export default Tabs;