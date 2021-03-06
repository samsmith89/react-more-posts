import { Fragment, Component, useState, useEffect } from "@wordpress/element";

function Posts(props) {
	const { loadPosts } = props;
	const { term, termId, posts, postsPerPage } = props.postsInfo;
	return (
		<>
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
			<button id={"poop"} onClick={() => loadPosts(term, termId, postsPerPage)}>get more</button>
		</>
	);
};

export default Posts;