import { Fragment, Component, useState, useEffect } from "@wordpress/element";
import Posts from './Posts/Posts';
import { spacecamel } from '../Helpers/Helpers'

function Subheader(props) {
	const { posts, loadPosts, selectTab } = props;

	return (

		<div className={"entry-content"}>
			<div class="tabs">
				{Object.entries(posts).map((post, index) => {
					return (
						<button className="tablinks" onClick={() => selectTab(post[1].term)}>{spacecamel(post[1].term)}</button>
					);
				})}
			</div>
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