// const moviesURL = ['https://www.imdb.com/title/tt12004706/'];
const movieURL = 'https://www.imdb.com/title/tt12004706/';
const cheerio = require('cherio');
const axios = require('axios').default;
const fs = require('fs');
const { Parser } = require('json2csv');

const main = async () => {
	const imdbData = [];
	const res = await axios.get(movieURL, {
		headers: {
			accept:
				'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
			'accept-encoding': 'gzip, deflate, br',
			'accept-language': 'en-US,en;q=0.9',
			'cache-control': 'max-age=0',
			'user-agent':
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
		},
	});

	// console.log({ res });

	const $ = cheerio.load(res?.data);
	const title = $('h1').text();
	console.log({
		title,
	});
};

main();
