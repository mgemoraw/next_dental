function isAuthenticated(): boolean {
	const storageUser = localStorage.getItem("dentalPass");
	return storageUser !== null;
}

function isUserInApp(location: string): boolean {
	return location.startsWith("/dental");
}

function logOut() {
	localStorage.removeItem("dentalPass");
	localStorage.removeItem('user');
	window.location.reload();
}

export { isAuthenticated, isUserInApp, logOut };
