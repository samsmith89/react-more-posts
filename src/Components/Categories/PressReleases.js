import { Fragment, Component, useState, useEffect } from "@wordpress/element";

function PressReleases(props) {
	const { loadMorePosts } = props;
	const { term, termId, posts } = props.postsInfo;

	return (
		<div className={"entry-content"}>
			{posts && posts.length && posts.map((post, index) => {
				return (
					<div key={post.id} className="posts-app__post">
						{post._embedded['wp:featuredmedia'] &&
							<img src={post._embedded['wp:featuredmedia']['0'].source_url} />
						}
						<h2>{post.title.rendered}</h2>
						<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
						<a href={post.link} target="_blank">Read post</a>
					</div>
				);
			})}
			<button id={"poop"} onClick={() => loadMorePosts(term, termId)}>get more</button>
		</div >
	);
};

export default PressReleases;