
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var Save = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	Save.click = function Save_click (event)// @startlock
	{// @endlock
		 // Get the current position from the mobile using the geolocation API
    navigator.geolocation.getCurrentPosition(Success, Error);
 
    function Success(position) {
 
        // Create a new position datasource entity
        sources.position.addNewElement()
 
        // Set the entity longitude and latitude
        sources.position.longitude = position.coords.longitude;
        sources.position.latitude = position.coords.latitude;
 
        // Set the creation Date as the current date
        sources.position.creationDate = new Date();
 
        // Save the entity in the remote Wakanda server
        sources.position.save({
            onSuccess: function (e) {
                alert("saved");
            },
 
            onError: function (err) {
                alert(err.message);
            }
 
        });
 
    }
 
    function Error(err) {
        alert(err.message);
    }
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("Save", "click", Save.click, "WAF");
// @endregion
};// @endlock
