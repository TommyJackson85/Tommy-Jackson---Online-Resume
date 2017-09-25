var bio = {
"biopic" : "images/cvphoto.jpg",
"name" : "Tommy Jackson",
"birth" : "19/09/1985",
"location" : "Perth, Australia",
"about" : `I am a <strong>Frontend Developer</strong> who practices JavaScript everyday. I'm also learning Angular 4, Node JS and the Mean stack and I am enrolled in Free Code Camp's full stack course. Much of my past work experience and education has allowed me to inherit skills in project management, team-work and communications. My hobbies and interests include cinema, reading, photography, screenwriting, swimming and cycling.`,
} ;
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#profileDetails").append(formattedPic);
console.log(formattedPic);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#profileDetails").append(formattedName);
console.log(formattedName);

var formattedBirth = HTMLbirth.replace("%data%", bio.birth);
$("#profileDetails").append(formattedBirth);
console.log(formattedBirth);

var formattedCurrentLocation = HTMLcurrentLocation.replace("%data%", bio.location);
$("#profileDetails").append(formattedCurrentLocation);
console.log(formattedCurrentLocation);

var formattedAbout = HTMLabout.replace("%data%", bio.about);
$("#profileDetails").append(formattedAbout);


	var contacts = {
	"phone" : "<h4><i class='fa fa-phone' aria-hidden='true'></i>	<i>xxx xxx xxxx</i></h4>",
	"email" : "<h4><i class='fa fa-envelope' aria-hidden='true'></i>	<i>tom.jackson50@gmail.com<i/></h4>",
	"internetPage" : [
		{"type" : " <i class='fa fa-linkedin-square' aria-hidden='true'></i>",
		"link" : "https://www.linkedin.com/in/tommy-jackson-bb21b66b/"},
		{"type" : "<i class='fa fa-google-plus-official' aria-hidden='true'></i>",
		"link" : "https://plus.google.com/u/0/110016559790020821468"},
		{"type" : "<i class='fa fa-twitter-square' aria-hidden='true'></i>",
		"link" : ""},
	]};

	function displayContacts () {
	var formattedPhone = HTMLcontact.replace('%data%', contacts.phone);
	var formattedEmail = HTMLcontact.replace('%data%', contacts.email);
	$("#contact").append(formattedPhone);
	$("#contact").append(formattedEmail);

	for (Page in contacts.internetPage) { 

	var formattedLink = HTMLlink.replace("%data%", contacts.internetPage[Page].link);

	$("#contact").append(formattedLink);
	console.log(HTMLlink);

	var formattedPageType = HTMLpageType.replace("%data%", contacts.internetPage[Page].type);
	$(".link:last").append(formattedPageType);
	console.log(formattedPageType);
	}
	}
	displayContacts ()

			var progressChart = {
			"skills": [{
				"text": "Javascript (85%)",
				"data": 85,
				"percentage": "85%"},
				{
				"text": "Angular 4 (30%)",
				"data": 30,
				"percentage": "30%"},
				{
				"text": "Node JS (30%)",
				"data": 30,
				"percentage": "30%"},
				{
				"text": "JQuery (70%)",
				"data": 70,
				"percentage": "70%"},
				{
				"text": "SASS / SCSS (50%)",
				"data": 50,
				"percentage": "50%"},
				{
				"text": "Bootstrap (100%)",
				"data": 100,
				"percentage": "100%"},
				{
				"text": "HTML5 (100%)",
				"data": 100,
				"percentage": "100%"},
				{
				"text": "CSS3 (100%)",
				"data": 100,
				"percentage": "100%"},
			]
			}

			function displayChart () {

			for (skill in progressChart.skills) {

			var formattedBarChartData = HTMLbarChartData.replace("%data%", progressChart.skills[skill].data) ;
			console.log(formattedBarChartData);

			var formattedBarChartPercentage = HTMLbarChartPercentage.replace("%data%", progressChart.skills[skill].percentage) ; 
			console.log(formattedBarChartPercentage);

			var formattedBarChartText = HTMLbarChartText.replace("%data%", progressChart.skills[skill].text);
			console.log(formattedBarChartText);

			var formattedBarChartFull = formattedBarChartData + formattedBarChartPercentage + formattedBarChartText;

			$("#barChart").append(formattedBarChartFull);	
			console.log(formattedBarChartFull);
			} }

			displayChart();

var education = {
"online": [
	{"company": "Udemy",
	"detail": "Currently enrolled in 'Angula 2 and 4', 'Node JS' and 'The MEAN Stack' tutorials."
	},
	{"company": "Free Code Camp",
	"detail": "Currently Enroled in FCC's Front End Development Certification course."},
	{"company": "Team Tree House",
	"detail": "Covered JavaScript Basics and Bootstrap video tutorials."},
],

"other": [
	{"company": "University College Cork, Ireland",
	"detail": "Received a Second Class Honours, Grade 1 BA Degree. Majored in Geography and Study of Religions. Worked with GIS technology such as ArcGIS for my disertation and other projects."},
	{"company": "European Computer Drivers License Certificate (2013)",
	"detail": ""}
]
}

function displayEducation () {

//$("#educationList").append(HTMLonlineEducation);
//console.log(HTMLonlineEducation);
	
for (Online in education.online) {
var formattedOnlineListItem = HTMLonlineListItem.replace("%data%", education.online[Online].company);
var	formattedOnlineDescription = HTMLdescription.replace("%data%", education.online[Online].detail);
var formatteOnlineListEntry = formattedOnlineListItem + formattedOnlineDescription;
$("#onlineList:last").append(formatteOnlineListEntry);
}
//$("#educationList").append(HTMLotherEducation);
//console.log(HTMLotherEducation);
	
for (Other in education.other) {
var formattedOtherListItem = HTMLotherListItem.replace("%data%", education.other[Other].company);
var	formattedOtherDescription = HTMLdescription.replace("%data%", education.other[Other].detail);
var formatteOtherListEntry = formattedOtherListItem + formattedOtherDescription;
$("#otherList:last").append(formatteOtherListEntry);
}
}
displayEducation ()
	 
		var experience = {
		"projects": [
			{"project" : "<a href='https://github.com/TommyJackson85'><h6><i class='fa fa-github' aria-hidden='true'></i> Github page</h6></a>",
			"detail" : "Collection of projects."},
			{
			"project": "<a href='https://codepen.io/ThomasJ85/collections/popular/'><h6><i class='fa fa-codepen' aria-hidden='true'></i>  Codepen page</h6></a>",
			"detail": "Collection of projects and examples of code."}
		],
		"work": [
			{"role": "Quality Control - General Operative.",
			"employerDates": "Apple European Headquarters - September 2015 to January 2016 November 2016 to Present."},
			{"role": "Production Assistant.",
			"employerDates": "EPIC Productions, Cork Ireland - January 2015 to September 2016."},
			{"role": "General Operative.",
			"employerDates": "CPL Recruitment - August 2015 to September 2016, August 2016 to October 2016."}
		],
		}

		function displayExperience () {
		//$("#experienceList").append(HTMLprojects);
		//console.log(HTMLprojects);
		for (Project in experience.projects) {
		var formattedProjectsListItem = HTMLprojectsListItem.replace("%data%", experience.projects[Project].project);
		var	formattedProjectsDescription = HTMLdescription.replace("%data%", experience.projects[Project].detail);
		var formattedProjectsListEntry = formattedProjectsListItem + formattedProjectsDescription;
		$("#projectsList").append(formattedProjectsListEntry);
		}

		//$("#experienceList").append(HTMLwork);
		//console.log(HTMLwork);
	
		for (Work in experience.work) {
		var formattedJobRole = HTMLjobRole.replace("%data%", experience.work[Work].role);
		var	formattedEmployerDates = HTMLemployerDates.replace("%data%", experience.work[Work].employerDates);
		var formattedWorkListEntry = formattedJobRole + formattedEmployerDates;
		$("#workList:last").append(formattedWorkListEntry);
		}
		}
		displayExperience ()
