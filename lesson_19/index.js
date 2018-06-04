const checkAuth = (resolve) => {
	setTimeout(() => {
		resolve( {isAuth: true} );
	}, 2000);
};
const getUser = (reject, resolve) => {
	if (!reject.isAuth) {
		callback(null);
		return;
	}
	setTimeout(() => {
		resolve( {name: 'Max'} );
	}, 2000);
};


checkAuth((reject) => {
	getUser(reject, (user) => {
		console.log(user.name);
	});
});
