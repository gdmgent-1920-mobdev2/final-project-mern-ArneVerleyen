import { default as React, useState, useEffect, useCallback } from 'react';
import { useApi } from '../../services';

const PostList = ({ children, onReadMore }) => {
	const { findAllPosts } = useApi();
	const [ posts, setPosts ] = useState();

	useEffect(() => {
		const fetchPosts = async () => {
			const data = await findAllPosts();
			console.log(data);
			setPosts(data);
		}
		fetchPosts();
	}, []);

	const handleReadMore = (ev, postId) => {
		ev.preventDefault();
		if (typeof onReadMore === 'function') {
			onReadMore(postId);
		}
	};

	return (
	<div className="post-list">
		{posts && posts.map((post, index) => (
				<article key={post._id}>
					<h1>{post.title}</h1>
					<div>{post.synopsis}</div>
					<button onClick={ev => handleReadMore
					(ev, post._id)}>Lees meer...</button>
				</article>
		))}
	</div>
	);
};

export default PostList;