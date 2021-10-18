# How it works

1. You send a url to print through MQTT print/site.
2. Printer makes a http request to the Kundle Server with the requested url.
3. The kundle server opens the requested url, waits till the page is loaded, screenshots the page and saves the image in the temp folder.
4. The kundle server responds to the original POST request with JSON containing the image location of the recent screenshot.
5. The printer then takes that screenshot url and requests the file - again... to the Kundle server.
6. The printer then prints the image received from the Kundle server
7. Easy init