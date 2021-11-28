const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {colors:{
			'antique-brass':'#CB997E',
			'desert-sand':'#DDBEA9',
			'champagne-pink':'#FFE8D6',
			'ash-gray':'#B7B7A4',
			'artichoke':'#A5A58D',
			'ebony':'#6B705C',
			},
			fontFamily:{'oleo-script':['"Oleo Script"', 'cursive']},
		}
	},

	plugins: []
};

module.exports = config;
