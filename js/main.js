const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = navLinks.querySelectorAll('a'); // barcha <a> elementlar

toggle.addEventListener('click', () => {
	navLinks.classList.toggle('active');
});

// Har bir nav item bosilganda menyuni yopish
navItems.forEach(item => {
	item.addEventListener('click', () => {
		navLinks.classList.remove('active');
	});
});
