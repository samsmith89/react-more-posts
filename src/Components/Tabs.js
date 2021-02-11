import { Fragment, Component, useState, useEffect } from "@wordpress/element";
import Subheader from './Subheader';

function Tabs(props) {
	const [posts, setPosts] = useState({
		all: {
			term: 'all',
			termId: null,
			posts: [],
			offset: 0,
			postsPerPage: 3,
			isActive: true
		},
		pressReleases: {
			term: 'pressReleases',
			termId: 2,
			posts: [],
			offset: 0,
			postsPerPage: 2,
			isActive: false
		}
	});

	const loadPosts = async (term = 'all', termId = null, postsPerPage = 4) => {
		let url = createURL(postsPerPage, termId);
		if (posts[term].offset >= 1) {
			url = `${url}&offset=${posts[term].offset}`;
		}

		// this can be combined with the function above
		const response = await fetch(url);
		if (!response.ok) {
			return;
			console.log("oops");
		}

		const newPosts = await response.json();
		if (newPosts.length >= 1) {
			let copy = { ...posts };
			copy[term].posts = copy[term].posts.concat(newPosts);
			copy[term].offset = copy[term].offset + postsPerPage;
			setPosts(copy);
		}
		console.log('should happen once');
	}

	useEffect(() => {
		loadPosts();
	}, []);

	function createURL(postPerPage, termId) {
		const urlBase = `/wp-json/wp/v2/`;
		let url;
		if (termId) {
			return url = `${urlBase}posts/?categories=${termId}&per_page=${postPerPage}&_embed`;
		}
		return url = `${urlBase}posts/?per_page=${postPerPage}&_embed`;
	}

	const selectTab = (term) => {
		let copy = { ...posts };
		for (let [key, value] of Object.entries(copy)) {
			if (key === term) {
				copy[key].isActive = true;
				if (copy[key].posts.length === 0) {
					loadPosts(copy[key].term, copy[key].termId, copy[key].postsPerPage)
				};
			} else {
				copy[key].isActive = false;
			}
		}
		setPosts(copy);
	}

	return (
		<Fragment>
			<Subheader posts={posts} loadPosts={loadPosts} selectTab={selectTab} />
		</Fragment>
	)
};

export default Tabs;