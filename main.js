let app = new Vue({
	el: '#app',
	data: {
		brandTitle: 'Vinyl Tracker',
		vinyls: [
			{
				artist: 'James Blake',
				albumTitle: 'Assume Form',
				albumArt:
					'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F2b1f29a1f0388cb48689fbf6db942958.1000x1000x1.jpg',
				descrition: ''
			},
			{
				artist: 'Kid Cudi',
				albumTitle: 'Passion, Pain & Demon Slaying',
				albumArt:
					'https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fefae5867d6e39372f9815e5f28cde6a5.1000x1000x1.jpg',
				descrition: ''
			},
			{
				artist: 'J. Cole',
				albumTitle: '2014 Forest Hills Drive',
				albumArt:
					'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F2f88c0a52697a42d3d0fb1e3276d2411.640x640x1.jpg',
				descrition: ''
			},
			{
				artist: 'Amy Winehouse',
				albumTitle: 'Back to Black',
				albumArt:
					'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F16b260685b715325b566d753dfe994a2.1000x1000x1.jpg',
				descrition: ''
			},
			{
				artist: 'Coheed and Cambria',
				albumTitle: "Good Apollo I'm Burning Star IV",
				albumArt:
					'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2Fda67becd1a8b03155e4ff30660998ff0.848x848x1.png',
				descrition: ''
			},
			{
				artist: 'Mac Miller',
				albumTitle: 'Faces[2LP]',
				albumArt:
					'https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F13ce35ef8b892b61cbe71e14f5a9e8f2.1000x1000x1.jpg',
				descrition: ''
			},
			{
				artist: 'Nipsey Hussle',
				albumTitle: 'Victory Lap',
				albumArt:
					'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F72e0788bf9888110c8f963aa527a1c50.600x600x1.jpg',
				descrition: ''
			},
			{
				artist: 'Logic',
				albumTitle: 'Under Pressure',
				albumArt:
					'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2Fb1b2ef60ddf88f6137655bb426960846.1000x1000x1.jpg',
				descrition: ''
			},
			{
				artist: 'Wu-Tang Clan',
				albumTitle: 'Enter The Wu-tang 36 Chambers',
				albumArt:
					'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2Fc7a86cb158b1111410d665fe6822c381.595x595x1.jpg',
				descrition: ''
			},
			{
				artist: 'Nas',
				albumTitle: 'Illmatic',
				albumArt:
					'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F95a112411e7bffbc9c61004e6f147e20.600x600x1.jpg',
				descrition: ''
			},
			{
				artist: 'Jay Z',
				albumTitle: 'Reasonable Doubt',
				albumArt:
					'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F18040c4f503942a16d6577d9820644cb.1000x1000x1.jpg',
				descrition: ''
			}
		],
		deleted: []
	},
	// methods
	methods: {
		deleteVinyl: function(vinyl) {
			// return this.vinyls.splice(this.vinyls.indexOf(vinyl), 1);
			// push items into new array
			this.deleted.push(this.vinyls.splice(this.vinyls.indexOf(vinyl), 1));
			console.log(this.deleted);
			console.log(this.vinyls);
		}
	}
});
