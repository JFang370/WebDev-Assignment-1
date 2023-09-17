const navLink = document.querySelectorAll('.nav_link');
const path = window.location.pathname;

navLink.forEach(navLink => {
	const pathName = new URL(navLink.href).pathname;

	if (path === pathName) {
		navLink.classList.add('active');
	}
});