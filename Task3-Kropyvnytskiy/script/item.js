const items = [{
	title: 'Angular',
	done: false,
	key: 0
}, {
	title: 'React',
	done: false,
	key: 1
}, {
	title: 'JS',
	done: false,
	key: 2
}];

items.forEach((cur) => {
	setStorage(cur)
});