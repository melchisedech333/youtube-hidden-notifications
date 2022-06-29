
(function() {

	console.log("Cristo <3");

	var intervalRunning = false;
	var intervalHN = setInterval(function() {
		if (intervalRunning == false) {
			intervalRunning = true;

			var els = document.querySelectorAll('.style-scope ytd-notification-topbar-button-renderer');
			
			if (els) {
				if (els.length > 0) {
					clearInterval(intervalHN);
					els[0].style.display = 'none';
					console.log("Notifications hidden!");
				}
			}

			intervalRunning = false;
		}
	}, 100);

})();


