import { Fragment, Component, useState, useEffect } from "@wordpress/element";
import Posts from './Posts/Posts';

function Subheader(props) {
	const { posts, loadPosts } = props;

	const selectTab = () => {
		for (var i = 0; i < posts; i++) {
			if (i.isActive) {

			}
		}
	};

	return (

		<div className={"entry-content"}>
			<div class="tab">
				<button id="all" className="tablinks" onClick={selectTab}>All</button>
				<button id="press-releases" className="tablinks" onClick={selectTab}>Press Releases</button>
			</div>
			{/* Add the onclicks */}
			{/* <Posts className="tabcontent" postsInfo={posts.all} loadPosts={loadPosts} />
			<Posts className="tabcontent" postsInfo={posts.pressReleases} loadPosts={loadPosts} /> */}
			{Object.entries(posts).map((post, index) => {
				console.log(post);
				if (post[1].isActive) {
					return (
						<Posts className="tabcontent" postsInfo={posts.all} loadPosts={loadPosts} />
					);
				}
			})}
		</div>
	);
};

export default Subheader;