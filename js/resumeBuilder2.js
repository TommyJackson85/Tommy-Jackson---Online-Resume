				/*Contacts Section*/
				//Data used to display and append each form of contact
				var contacts = {
					"directContact" : [
						{ class : 'fa fa-phone',
						data : 'xxx xxx xxxx'},/*<i class='fa fa-phone' aria-hidden='true'></i>	<i>xxx xxx xxxx</i>*/
						{ class : 'fa fa-envelope',
						data : 'tom.jackson50@gmail.com'}],/*"<h4><i class='fa fa-envelope' aria-hidden='true'></i>	<i>tom.jackson50@gmail.com<i/></h4>",*/
					"internetPage" : [
						{class : "fa fa-linkedin-square", /*aria-hidden='true'></i>",*/
						link : "https://www.linkedin.com/in/tommy-jackson-bb21b66b/" },/*"https://www.linkedin.com/in/tommy-jackson-bb21b66b/"},*/
						{class : "fa fa-google-plus-official",
						link : "https://plus.google.com/u/0/110016559790020821468"},
						{"class" : "fa fa-twitter-square",
						link : ""},
					]};
				//Function used to append and display contacts.
				function displayContacts () {
					for (Direct in contacts.directContact) {
						$("#contact").append(
							$("<div>").addClass("contact").append(
								"<i class='" + contacts.directContact[Direct].class + "' ></i>" + 
									"<i> " + contacts.directContact[Direct].data + "</i>"));	
					}

					for (Internet in contacts.internetPage) { 
						$("#contact").append(
							$("<div>").addClass("pageIcon").append(
								'<a href="' + contacts.internetPage[Internet].link + '" class="link">'
								+ '<i class="' + contacts.internetPage[Internet].class + '" aria-hidden="true"></i>'
								+ '</a>' 
							)
						);
					}
				}
				displayContacts ();

/*Skills Section*/
//Data used to display and append each skill progress
var skillsData = {
	"skills": [
		{
		"skill": "Javascript",
		"percent": 85
		},
		{
		"skill": "Angular 4",
		"percent": 30
		},
		{
		"skill": "Node JS",
		"percent": 30
		},
		{
		"skill": "JQuery",
		"percent": 70
		},
		{
		"skill": "SASS / SCSS",
		"percent": 50
		},
		{
		"skill": "Bootstrap",
		"percent": 100
		},
		{
		"skill": "HTML5",
		"percent": 100
		},
		{
		"skill": "CSS3",
		"percent": 100
		},
	]
}
//Bootstrap HTML used to display each skill progress as part of a bar chart.
var HTMLbarChart = '<div class="progress col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">' 
+ '<div class="progress-bar" role="progressbar" ' 
+ ' aria-valuenow="' + '%percent%' + '" aria-valuemin="0" aria-valuemax="100" style="width:' + '%percent%' + '%;">' 
+ '%skill%' +'(' + '%percent%' + '%)' 
+ '</div>' 
+ '</div>';
//Displays Skills Bar Chart
function displaySkillsChart () {
	for (skill in skillsData.skills) {
		var formattedBarChart = HTMLbarChart.replace(/%percent%/g, skillsData.skills[skill].percent); 
		formattedBarChart = formattedBarChart.replace('%skill%', skillsData.skills[skill].skill);
		$("#barChart").append(formattedBarChart);
	} 
}
displaySkillsChart();

				/*Variables use to help append code for Education and Experience sections below*/
				var addListItem = function addListItem(id, itemText){
				   $("<li>").appendTo(id).addClass(".listItem").html(itemText);
				}
				var itemText = "";



/*Education Section*/
//Education object. Data to be appended to Dom
var education = {
online: [
	{
	company: "Udemy",
	detail: "Currently enrolled in 'Angula 2 and 4', 'Node JS' and 'The MEAN Stack' tutorials."
	},
	{
	company: "Free Code Camp",
	detail: "Currently Enroled in FCC's Front End Development Certification course."
	},
	{
	company: "Team Tree House",
	detail: "Covered JavaScript Basics and Bootstrap video tutorials."
	}
],

other: [
	{company: "University College Cork, Ireland",
	detail: "Received a Second Class Honours, Grade 1 BA Degree. Majored in Geography and Study of Religions. Worked with GIS technology such as ArcGIS for my disertation and other projects."},
	{company: "European Computer Drivers License Certificate (2013)",
	detail: ""}
]}


//displayEducation used to append and display data in the correct HTML
function displayEducation () {
	for (Online in education.online){
		itemText = "<i>" + education.online[Online].company + "</i>" + "<p>" + education.online[Online].detail + "</p>"
		addListItem("#onlineList", itemText)
	};

	for (Other in education.other) {
		itemText = "<i>" + education.other[Other].company + "</i>" + "<p>" + education.other[Other].detail + "</p>"
		addListItem("#otherList", itemText)
	};
	}
displayEducation ()
	 			
	 			/*Experience Section*/
	 			//Experience object. Data to be appended to Dom
				var experience = {
				projects: [
					{project : "<a href='https://github.com/TommyJackson85'><h6><i class='fa fa-github' aria-hidden='true'></i> Github page</h6></a>", 
					detail : "Collection of projects."},
					{
					project: "<a href='https://codepen.io/ThomasJ85/collections/popular/'><h6><i class='fa fa-codepen' aria-hidden='true'></i>  Codepen page</h6></a>",
					detail: "Collection of projects and examples of code."}
				],
				work: [
					{role: "Quality Control - General Operative",
					employerDates: "<i>Apple European Headquarters</i> - September 2015 to January 2016 November 2016 to Present.",
				},
					{role: "Production Assistant",
					employerDates: "<i>EPIC Production</i> - January 2015 to October 2016",
				},
					{role: "General Operative",
					employerDates: "<i>CPL Recruitment</i> - August 2015 to September 2016, August 2016 to October 2016."
				}
				],
				}
				//displayExperience used to append and display data in the correct HTML
				function displayExperience () {
					for (Project in experience.projects) {
						itemText = experience.projects[Project].project
						+ "<p>" + experience.projects[Project].detail + "</p>";
						addListItem("#projectsList", itemText);
					}
					for (Work in experience.work) {
				
						itemText = "<p><strong>" + experience.work[Work].role + "</strong></p>" 
						+ "<p>" + experience.work[Work].employerDates + "</p>";
						addListItem("#workList", itemText);
					}
				}
				displayExperience ();
