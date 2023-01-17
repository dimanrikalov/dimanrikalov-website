const head = document.getElementsByTagName('head')[0];
const link = document.createElement('link');

link.rel = 'stylesheet';

(function fnBrowserDetect() {
  
	let userAgent = navigator.userAgent;

	if (userAgent.match(/Mac OS X/i) || userAgent.match(/iPhone OS/i)) {
		link.href = './safariMediaQueries.css';
		document.getElementsByTagName('HEAD')[0].appendChild(link);
	} else {
		link.href = './chromeMediaQueries.css';
		document.getElementsByTagName('HEAD')[0].appendChild(link);
		return;
	}
})();
