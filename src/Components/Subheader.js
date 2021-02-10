import { Fragment, Component, useState, useEffect } from "@wordpress/element";
import Posts from './Posts/Posts';

function Subheader(props) {
	const { posts, loadPosts, selectTab } = props;

	// const selectTab = (i) => {
	// 	Object.entries(posts).map((post, index) => {
	// 		console.log(post[1].isActive);
	// 		if (post[1] = term)
	// 	});
	// };

	return (

		<div className={"entry-content"}>
			<div class="tab">
				<button id="all" className="tablinks" onClick={() => selectTab('all')}>All</button>
				<button id="press-releases" className="tablinks" onClick={() => selectTab('pressReleases')}>Press Releases</button>
			</div>
			{/* Add the onclicks */}
			{/* <Posts className="tabcontent" postsInfo={posts.all} loadPosts={loadPosts} />
			<Posts className="tabcontent" postsInfo={posts.pressReleases} loadPosts={loadPosts} /> */}
			{Object.entries(posts).map((post, index) => {
				if (post[1].isActive) {
					return (
						<Posts className="tabcontent" postsInfo={posts[post[1].term]} loadPosts={loadPosts} />
					);
				}
			})}
		</div>
	);
};

export default Subheader;