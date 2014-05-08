var http = require('http');
var path = require('path');
var fs = require('fs');

var port = 3000;
var ip = '0.0.0.0';

(function(port, ip) {
	if (typeof ip === 'undefined') {
		ip = '127.0.0.1';
	}
	http.createServer(function (request, response) {
		var filePath = request.url;
		console.log('Request starting: ' + filePath);
		if (filePath === '/') {
			filePath = '/app.html';
		}
		filePath = './src' + filePath;
	
		var extname = path.extname(filePath);
		var contentType = 'text/html';
		switch (extname) {
			case '.js':
				contentType = 'text/javascript';
				break;
			case '.css':
				contentType = 'text/css';
				break;
		}
	
		fs.exists(filePath, function(exists) {
			if (exists) {
				fs.readFile(filePath, function(error, content) {
					if (error) {
						console.log('  Response 500');
						response.writeHead(500);
						response.end();
					}
					else {
						console.log('  Response: 200');
						response.writeHead(200, {
							'Content-Type': contentType
						});
						response.end(content, 'utf-8');
					}
				});
			}
			else {
				console.log('  Response: 404');
				response.writeHead(404);
				response.end();
			}
		});
	}).listen(port, ip);
	console.log('Server running at http://' + ip + ':' + port + '/');
})(port, ip);