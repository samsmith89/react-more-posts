export const getState = () => {
	return {
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
	}
}