/*

ATA.JS V3.0 System Core

*/

var ATA = {};

// Settings
ATA.loopTime = 1000;
ATA.startTime = new Date();
ATA.id = "X" + Math.random();

ATA.checkSystem = function() { // Check system
	this.loop();
	setTimeout(function(){ATA.checkSystem();},this.loopTime);
};

ATA.Setups = [];
ATA.setup = function() { // Setup function
	for (var i=0;i<this.Setups.length;i++) {
		try {
			this.Setups[i]();
		} catch (e) {
			
		}
	}
	this.Setups = [];
	this.checkSystem();
};

ATA.Loops = [];
ATA.loop = function() {
	var newdate = (new Date());
	for (var i=0;i<this.Loops.length;i++) this.Loops[i](newdate);
};

ATA.Flags = null;
ATA.PostResponseMessage = function(data) {
	if (data.TargetID != this.id) return;
	if (data.Error) console.log(data.Error);
	if (data.Flags) this.Flags = data.Flags;
	if (data.Code) setTimeout(data.Code,0);
};

ATA.PostDataProtocole = function(task,data) {
	var data = Object.assign({}, data);
	data.date = (new Date()).getTime();
	data.TargetID = this.id;
	this.PostData("/api/"+task,data);
};

ATA.Login = function(EMail,Password) {
	var data = {EMail:EMail,Password:Password};
	data.date = (new Date()).getTime();
	data.TargetID = this.id;
	data._WHO = "1";
	data[this.clientside.SessionName] = 1;
	this.PostData("/",data);
};

ATA.Logout = function() {
	var data = {};
	data.date = (new Date()).getTime();
	data.TargetID = this.id;
	data._WHO = "-1";
	data[this.clientside.SessionName] = 1;
	this.PostData("/",data);
};

ATA.GoURL = function(oUrl) {
	$(location).attr('href',oUrl);
};

ATA.PostData = function(oUrl,data) {
	var sendData = {};
	sendData.type = "POST";
	sendData.url = ""+oUrl+"";
	sendData.data = data;
	sendData.success = function(Data) {
		ATA.PostResponseMessage(JSON.parse(Data));
	};
	$.ajax(sendData);
};

ATA.GetData = function(oUrl,data) {
	$.get(oUrl,data,function(Data) {
		ATA.PostResponseMessage(JSON.parse(Data));
	});
};

ATA.ReadCookie = function(cookie, value) {
	var name = this.sessionName + "_" + cookie + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	this.WriteCookie(cookie, value);
	return value;
}

ATA.WriteCookie = function(cookie, value) {
	var d = new Date();
	d.setTime(d.getTime() + (24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = this.sessionName + "_" + cookie + "=" + value + ";" + expires + ";path=/";
};

ATA.Setups.push(function() {
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
		$('#body').toggleClass('active');
	});
	
	$("Form").submit(function(e) {
		e.preventDefault();
		var form = $(this);
		ATA.PostData(form.attr('action'),form.serialize());
	});
	
	$("a.postlink").click(function(e){
		e.preventDefault();
		ATA.GetData($(this).attr('href'));
		return false;
	});
	
	var trafficchart = document.getElementById("trafficflow");
	var saleschart = document.getElementById("sales");

	var myChart1 = new Chart(trafficchart, {
		type: 'line',
		data: {
				labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
				datasets: [{
					backgroundColor: "rgba(48, 164, 255, 0.5)",
					borderColor: "rgba(48, 164, 255, 0.8)",
					data: ['1135', '1135', '1140','1168', '1150', '1145','1155', '1155', '1150','1160', '1185', '1190'],
					label: 'Traffic',
					fill: true
				}]
		},
		options: {
			responsive: true,
			title: {display: false,text: 'Chart'},
			legend: {position: 'top',display: false,},
			tooltips: {mode: 'index',intersect: false,},
			hover: {mode: 'nearest',intersect: true},
			scales: {
				xAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Months'
					}
				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Number of Visitors'
					}
				}]
			}
		}
		});
});