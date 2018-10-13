// Get the information
if(!sessionStorage.getItem("logged")){
	if(/bot|crawler|spider|crawling/i.test(navigator.userAgent)){
		console.log("You are a bot!");
	}else{
		var properties = {
			browser_name: platform.name,
			browser_version: platform.version,
			os_name: platform.os.family,
			os_version: platform.os.version
		}

		// Make request to backend
		var request = new XMLHttpRequest();
		var url = "https://dav-backend.herokuapp.com/v1/analytics/event?api_key=gHgHKRbIjdguCM4cv5481hdiF5hZGWZ4x12Ur-7v&name=blog_visit&app_id=4&save_country=true";

		request.open("POST", url);
		request.setRequestHeader("Content-Type", "application/json");
		
		request.addEventListener("load", function(event){
			if(request.status == 201){
				sessionStorage.setItem("logged", true)
			}
		});

		request.send(JSON.stringify(properties));
	}
}