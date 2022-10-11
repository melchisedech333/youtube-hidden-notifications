
(function() {

	var url = window.location.href.toString().trim();
    if (url.indexOf('youtube.com') == -1) {
        return;
    }

	console.log("YouTube Hidden Notifications Started - I Love Cristo <3");

	// Hidden notifications.
	var intervalNotificationsRunning = false;
	var intervalNotifications = setInterval(function() {

		if (intervalNotificationsRunning == false) {
			intervalNotificationsRunning = true;

			var els = document.querySelectorAll('.style-scope ytd-notification-topbar-button-renderer');
			
			if (els) {
				if (els.length > 0) {
					clearInterval(intervalNotifications);
					els[0].style.display = 'none';
					console.log("Notifications hidden!");

					// Hidden others ícones.
					var elsb = document.querySelectorAll('.style-scope ytd-topbar-menu-button-renderer');
					elsb[1].style.display = 'none';
				}
			}

			intervalNotificationsRunning = false;
		}
	}, 100);

	// Title monitor.
	var intervalTitleRunning = false;
	setInterval(function() {

		if (intervalTitleRunning == false) {
			intervalTitleRunning = true;

			// Check total notifications.
			var title = document.title.toString().trim();
			var part1 = title.substring(1, title.length);
			var part2 = part1.split(')');
			var part3 = '';
			var totalNotifications = 0;

			if (part2) {
				if (part2[0]) {
					part3 = part2[0].toString().trim();
					if (part3.length > 0) {
						totalNotifications = parseInt(part3);
					}
				}
			}

			// New title.
			var newTitle = '';

			if (totalNotifications > 0) {
				var offset = 2 + part3.length;
				newTitle = title.substring(offset, title.length).trim();

				if (newTitle.length <= 0) {
					document.title = 'YouTube';
				} else {
					document.title = newTitle;
				}
			}

			intervalTitleRunning = false;
		}
	}, 100);

})();


