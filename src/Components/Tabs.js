import { Fragment, Component, useState, useEffect } from "@wordpress/element";
import All from './Categories/All';
import PressReleases from './Categories/PressReleases';

function Tabs(props) {
	const [posts, setPosts] = useState({
		all: {
			term: 'all',
			termId: null,
			posts: [],
			offset: 0
		},
		pressReleases: {
			term: 'pressReleases',
			termId: 2,
			posts: [],
			offset: 0
		}
	});
	const [offsetPostCount, setOffsetPostCount] = useState(0);

	const loadPosts = async () => {
		let final = {};
		for (const type in posts) {
			let url = createURL(4, posts[type].termId);
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
				final = { ...copy };
			}
		}
		setPosts({ ...final });
		// setOffsetPostCount(newPosts.length + offsetPostCount);
	}

	const loadMorePosts = async (term = 'all', termId = null) => {
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
			let copy = { ...posts };
			copy[term].posts = copy[term].posts.concat(newPosts);
			setPosts(copy);
		}
	}


	useEffect(() => {
		loadPosts();
	}, [])

	function createURL(postPerPage = 4, termId = null) {
		const urlBase = `/wp-json/wp/v2/`;
		let url;
		if (termId) {
			return url = `${urlBase}posts/?categories=${termId}&per_page=${postPerPage}&_embed`;
		}
		return url = `${urlBase}posts/?per_page=${postPerPage}&_embed`;
	}

	return (
		<Fragment>
			<All postsInfo={posts} loadMorePosts={loadMorePosts} />
			<h1>Different</h1>
			{/* <PressReleases postsInfo={posts.pressReleases} loadMorePosts={loadMorePosts} /> */}
		</Fragment>
	)
};

export default Tabs;