var bio = {
"biopic" : "images/cvphoto.jpg",
"name" : "Tommy Jackson",
"birth" : "19 / 09 / 1985",
"location" : "Cork, Ireland",
"about" : "I am a Frontend Developer who practices JavaScript everyday. I am always continuing to learn new code and frameworks. I am also currently working for Apple Computers at their European Headquarters, testing their iMacs hardware. I also Enjoy going to the cinema, reading, photography, screenwriting swimming and cycling.",
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
	"contactList" : [
		{"type" : "Phone",
		"data" : "xxx xxx xxxx"},
		{"type" : "Email",
		"data" : "tom.jackson50@gmail.com"},
		{"type" : "LinkedIn",
		"data" : "xxxxxxxxxxx"},
		{"type" : "Skype",
		"data" : "xxxxxxx"},
		{"type" : "Facebook",
		"data" : "xxxxxxxxx"},
		{"type" : "Twitter",
		"data" : "xxx xxx xxx"},
				]
			};

			function displayContacts () {
for (Contact in contacts.contactList) { 

$("#contact").append(HTMLcontact);
console.log(HTMLcontact);

var formattedContactType = HTMLcontactType.replace("%data%", contacts.contactList[Contact].type);
$(".contact:last").append(formattedContactType);
console.log(formattedContactType);

var formattedContactData = HTMLcontactData.replace("%data%", contacts.contactList[Contact].data);
$(".contact:last").append(formattedContactData);
console.log(formattedContactData);

}
}
displayContacts ()

var progressChart = {
	"skills": [{
		"text": "Javascript Basics (70%)",
		"data": 70,
		"percentage": "70%"},
		{
		"text": "JQuery (70%)",
		"data": 70,
		"percentage": "70%"},
		{
		"text": "Angular JS (70%)",
		"data": 70,
		"percentage": "70%"},
		{
		"text": "React JS (70%)",
		"data": 70,
		"percentage": "70%"},
		{
		"text": "SASS / SCSS (50%)",
		"data": 50,
		"percentage": "50%"},
		{
		"text": "Bootstrap (60%)",
		"data": 60,
		"percentage": "60%"},
		{
		"text": "HTML5 (60%)",
		"data": 60,
		"percentage": "60%"},
		{
		"text": "CSS3 (60%)",
		"data": 60,
		"percentage": "60%"},
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
		{
		"company": "Free Code Camp",
		"detail": "Currently Enroled"},
		{
		"company": "Team Tree House",
		"detail": "Covered JavaScript Basics and Bootstrap video tutorials."},
		{
		"company": "Codeaccademy",
		"detail": "Covered HTML5 and CSS tutorials."}
		],

	"other": [
		{
		"company": "University College Cork, Ireland",
		"detail": "Received a Second Class Honours, Grade 1 BA Degree. Majored in Geography and Study of Religions."},
		
		{
		"company": "University College Cork, Ireland",
		"detail": "Received a Second Class Honours, Grade 1 BA Degree. Majored in Geography and Study of Religions."},

		{
		"company": "European Computer Drivers License Certificate (2013)",
		"detail": ""}
		]
	}

function displayEducation () {

	$("#educationList").append(HTMLonlineEducation);
	console.log(HTMLonlineEducation);
	
	for (Online in education.online) {
	var formattedOnlineListItem = HTMLonlineListItem.replace("%data%", education.online[Online].company);
	var	formattedOnlineDescription = HTMLdescription.replace("%data%", education.online[Online].detail);
	var formatteOnlineListEntry = formattedOnlineListItem + formattedOnlineDescription;
	$("#onlineList:last").append(formatteOnlineListEntry);
	}

$("#educationList").append(HTMLotherEducation);
	console.log(HTMLotherEducation);
	
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
		{
		"project": "Free Code Camp",
		"detail": "Currently Enroled"}
		],
		

	"work": [
		{
		"role": "Quality Control - General Operative.",
		"employerDates": "Apple European Headquarters - September 2015 to January 2016 November 2016 to Present."},
		{
		"role": "Production Assistant.",
		"employerDates": "EPIC Productions, Cork Ireland - January 2015 to September 2016."},
		{
		"role": "General Operative.",
		"employerDates": "CPL Recruitment - August 2015 to September 2016, August 2016 to October 2016."}
		],
	}

function displayExperience () {

	$("#experienceList").append(HTMLprojects);
	console.log(HTMLprojects);
	
	for (Project in experience.projects) {
	var formattedProjectsListItem = HTMLprojectsListItem.replace("%data%", experience.projects[Project].project);
	var	formattedProjectsDescription = HTMLdescription.replace("%data%", experience.projects[Project].detail);
	var formattedProjectsListEntry = formattedProjectsListItem + formattedProjectsDescription;
	$("#projectsList").append(formattedProjectsListEntry);
	}

$("#experienceList").append(HTMLwork);
	console.log(HTMLwork);
	
	for (Work in experience.work) {
	var formattedJobRole = HTMLjobRole.replace("%data%", experience.work[Work].role);
	var	formattedEmployerDates = HTMLemployerDates.replace("%data%", experience.work[Work].employerDates);
	var formattedWorkListEntry = formattedJobRole + formattedEmployerDates;
	$("#workList:last").append(formattedWorkListEntry);
	}

}
displayExperience ()
