import { Fragment, Component, useState, useEffect } from "@wordpress/element";
import Posts from './Posts/Posts';

function Subheader(props) {
	const [activeTab, setActiveTab] = useState(props.children[0].props.label);

	onClickTabItem = (tab) => {
		({ activeTab: tab });
	}

	return (

		<>
			<div class="tab">
				<button id="all" className="tablinks" onClick={openCity("all")}>All</button>
				<button id="press-releases" className="tablinks" onClick={openCity("press-releases")}>Press Releases</button>
			</div>
			{/* Add the onclicks */}
			<Posts className="tabcontent" postsInfo={props.posts.all} loadPosts={props.loadPosts} />
			<Posts className="tabcontent" postsInfo={props.posts.pressReleases} loadPosts={props.loadPosts} />
		</>
	);
};

export default Subheader;