import { Fragment, Component, useState, useEffect } from "@wordpress/element";
import All from './Categories/All';
import PressReleases from './Categories/PressReleases';

function Tabs(props) {
	const [posts, setPosts] = useState({
		all: {
			catID: null,
			posts: []
		},
		pressReleases: {
			catID: 2,
			posts: []
		}
	});
	const [offsetPostCount, setOffsetPostCount] = useState(0);

	async function loadPosts() {
		let final = {};
		for (const cat in posts) {
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
				let copy = posts;
				copy[cat]['posts'] = newPosts;
				final = { ...copy };
			}
		}
		setPosts({ ...final });
		// setOffsetPostCount(newPosts.length + offsetPostCount);
	}

	useEffect(() => {
		const catId = null;


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
			<All posts={posts.all.posts} loadPosts={loadPosts} cat={'all'} />
			<h1>Different</h1>
			<PressReleases posts={posts.pressReleases.posts} loadPosts={loadPosts} cat={'pressReleases'} catId={2} />
		</Fragment>
	)
};

export default Tabs;