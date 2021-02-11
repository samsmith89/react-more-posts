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
		},
		teamUpdates: {
			term: 'teamUpdates',
			termId: 3,
			posts: [],
			offset: 0,
			postsPerPage: 3,
			isActive: false
		},
		companyUpdates: {
			term: 'companyUpdates',
			termId: 4,
			posts: [],
			offset: 0,
			postsPerPage: 3,
			isActive: false
		},
		productNews: {
			term: 'productNews',
			termId: 5,
			posts: [],
			offset: 0,
			postsPerPage: 3,
			isActive: false
		},
		awardsReviews: {
			term: 'awardsReviews',
			termId: 6,
			posts: [],
			offset: 0,
			postsPerPage: 3,
			isActive: false
		}
	}
}

export const spacecamel = (s) => {
	return s.replace(/([a-z])([A-Z])/g, '$1 $2');
}