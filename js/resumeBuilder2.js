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
/*$("#educationList").append(HTMLonlineEducation);
console.log(HTMLonlineEducation);

	if (education.online[Online].description.lenght = 0) {

		for (Online in education.online) {
		var formattedOnlineCompany = HTMLlistItemStart.replace("%data%", education.online[Online].company);
		var formattedOnlineDescription = HTMLdescription.replace("%data%", education.online[Online].description);
		var formattedOnlineEntry = formattedOnlineCompany + formattedOnlineDescription;
			$(".onlineList:Last").append(formattedOnlineEntry); }

	} else { 

		for (Online in education.online) {
		var formattedOnlineCompany = HTMLlistItemStart.replace("%data%", education.online[Online].company);
		var formattedOnlineDescription = HTMLdescriptionFalse; 
		var formattedOnlineEntry = formattedOnlineCompany + formattedOnlineDescription;
			$(".onlineList:Last").append(formattedOnlineEntry); }
	}

		

/*			if(education.online.length > 0) {
	$(".education-entry:last").append(HTMLonlineClasses) ;
	console.log(HTMLonlineClasses);

	for (online in education.online) { 

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[online].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[online].school);
		var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineSchoolTitle);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[online].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.online[online].URL);
		$(".education-entry:last").append(formattedOnlineURL);

}*/

	
	/*console.log(formattedOnlineCompany);
	console.log(formattedOnlineDescription);*/

/*
$("#educationList").append(HTMLotherEducation);
console.log(HTMLotherEducation);

for (Other in education.other) {
	var formattedOtherCompany = HTMLcompany.replace("%data%", education.other[Other].company);
	var formattedOtherDescription = HTMLdescription.replace("%data%", education.other[Other].description);
	
	$("#other-list:last").append(formattedOtherCompany);
	$(".companyListItem:last").append(formattedOtherDescription);
	
	console.log(formattedOtherCompany);
	console.log(formattedOtherDescription);
}
*/


/*if (education.online[Online].description.lenght > 0) {	
	for (Online in education.online) {
	var formattedDescription = HTMLdescription.replace("%data%", education.online[Online].description);
	$(".companyListItem").append(formattedDescription);
	console.log(formattedDescription);
/*
	var experience = {
	"projects": [{
		"name": "Station Spotter",
		"description": "Mobile App for students and online workers. *Work in progress*."},
		]
	"work": [
		{"role": "Quality Control - General Operative.",
		"companyDates": "Apple European Headquarters - September 2015 to January 2016 November 2016 to Present."},
		{"role": "Production Assistant.",
		"companyDates": "EPIC Productions, Cork Ireland - January 2015 to September 2016."},
		{"role": "General Operative.",
		"companyDates": "CPL Recruitment, Cork Ireland - August 2015 to September 2016, August 2016 to October 2016."},

		]
	}*/

//<section>
   // <h2 class="text-center">Skill Progress</h2><br><br>
    //<div class="container">
      //<div class="row">
        //<div class="col-md-2 col-lg-2"></div>
          //<div class="col-md-8 col-lg-8">


//var HTMLbarChartStart = '<div class="barChart-entry"></div>'
/*$("#barChart").append(HTMLbarChartStart);

for (skill in progressChart.skills) {

var formattedProgressBCname = HTMLprogressBarChartName.replace("%data%", progressChart.skills[skill].name) ;
$(".barChart-entry").append(formattedProgressBCname);
var formattedProgressBCprogress = HTMLprogressBarChartProgress.replace("%data%", progressChart.skills[skill].progress) ; 
$(".barChart-entry:last").append(formattedProgressBCprogress);
var formattedProgressBCpercentage = HTMLprogressBarChartPercentage.replace("%data%", progressChart.skills[skill].percentage);
$(".barChart-entry:last").append(formattedProgressBCpercentage);
//var formattedBarChart = formattedProgressBCname + formattedProgressBCprogress + formattedProgressBCpercentage; 	
} */

$(function () { 
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

//$( window ).scroll(function() {   
//if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
       

$(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  }); 
//}}


 
//var formattedSkill = 
//HTMLskills.replace("%data%", bio.skills[0]);
//$("#skills").append(formattedSkill) ;

//formattedSkill = 
//HTMLskills.replace("%data%", bio.skills[1]);
//$("#skills").append(formattedSkill) ;

//formattedSkill = 
//HTMLskills.replace("%data%", bio.skills[2]);
//$("#skills").append(formattedSkill) ;

//formattedSkill = 
//HTMLskills.replace("%data%", bio.skills[3]);
//$("#skills").append(formattedSkill);

//console.log(formattedSkill);







//if(bio.skills.length > 0) {

//$("#header").append(HTMLskillsStart) ;
//console.log(HTMLskillsStart);

//var formattedSkill = 
//HTMLskills.replace("%data%", bio.skills[0]);
//$("#skills").append(formattedSkill) ;

//formattedSkill = 
//HTMLskills.replace("%data%", bio.skills[1]);
//$("#skills").append(formattedSkill) ;

//formattedSkill = 
//HTMLskills.replace("%data%", bio.skills[2]);
//$("#skills").append(formattedSkill) ;

//formattedSkill = 
//HTMLskills.replace("%data%", bio.skills[3]);
//$("#skills").append(formattedSkill);

//console.log(formattedSkill);
//}













/*
function inName(name) {
name = name.trim().split(" ");
console.log(name);

name[1] = name[1].toUpperCase();

name[0] = name[0].slice(0,1).toUpperCase() +
name[0].slice(1).toLowerCase();

return name[0] + " " + name[1];

$("#main").append(internationalizeButton);
}
*/
/*
var work = {
"jobs": [{
	"employer": "Ferrero Ireland Ltd.",
	"position": "General Operative",
	"dates" : "August 2015 - September 2015 ; August 2016 - September 2016",
	"location": "Cork, Ireland",
	"description": "A team oriented, fast-paced work environment. Work required strong organisational skills and an ability to work one's own initiative. Work duties included packing sweets and displays into boxes and stacking boxes on pallets."
},
{
	"employer": "Apple European Headquarters",
	"position": "Quality Control General Operative",
	"dates": "September 2015 - January 2016",
	"location": "Dublin, Ireland", 
	"description": "Tested software and hardware on iMacs as part of a team. Job duties included detecting and reporting faults in sorftware and hardware, sending back faulty iMacs back to the manufacturing section and general lifting duties."  
},
{
	"employer": "EPIC Productions",
	"position": "Production Assistant and Office Administrator",
	"dates": "January 2015 - September 2016",
	"location": "limerick, Ireland",
	"description": "Worked as both a Production Assistant and an Office Administrator for a Corporate Video Production company. Duties included answering E-mails and Phonecalls and assisting on set."
}]
};

function displayWork () {
for (job in work.jobs) { 

$("#workExperience").append(HTMLworkStart);
console.log(HTMLworkStart);

var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);

var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
    
$(".work-entry:last").append(formattedEmployerTitle);
console.log(formattedEmployerTitle);

var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedWorkLocation);

var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedWorkDates);
console.log(formattedWorkDates);

var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

$(".work-entry:last").append(formattedDescription);
console.log(formattedDescription) 

}
} ;

displayWork();


/*
var education = {
	

	"online": 
	[{
	"title": "Javascript Basics" ,
	"school": "Udacity",
	"dates": 2016,
	"URL": "https://www.udacity.com/course/javascript-basics--ud804",
	},
	{
	"title": "HTML and CSS",
	"school": "Codeaccademy",
	"dates": 2016,
	"URL": "https://www.codecademy.com/learn/web"

	}],

	"schools": [{
		"name": "University College Cork",
		"degree": "Second Class Honours BA Degree, Grade 1",
		"dates": "2009 to 2012",
		"graduation": 2012,
		"location": "Cork, Ireland",
		"major": ["Geography", "Study of Religion"]
	}, 
	{
		"name": "St. Johns College",
		"degree": "FETAC Level 5",
		"dates": "2005 to 2007",
		"graduation": 2007,
		"location": "Cork, Ireland",
		"major": ["Film production", "Video production"]
	}]
}; */

//function displayEducation () {
//for (job in work.jobs) { 
/*
education.display = function() {

	for (school in education.schools) {
$("#education").append(HTMLschoolStart);
console.log(HTMLschoolStart);

var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);

var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
$(".education-entry:last").append(formattedSchoolNameDegree);
console.log(formattedSchoolNameDegree);

var formattedSchoolDates =  HTMLschoolDates.replace("%data%", education.schools[school].dates);
$(".education-entry:last").append(formattedSchoolDates);

var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location); 
$(".education-entry:last").append(formattedSchoolLocation);

var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[0]);
$(".education-entry:last").append(formattedSchoolMajor); }

if(education.online.length > 0) {
	$(".education-entry:last").append(HTMLonlineClasses) ;
	console.log(HTMLonlineClasses);

	for (online in education.online) { 

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[online].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[online].school);
		var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineSchoolTitle);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[online].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.online[online].URL);
		$(".education-entry:last").append(formattedOnlineURL);

}
}

}
 education.display();

//$("#main").append(education.schools[1].name);
//$("#main").append(education.schools[1].major[0]);
//console.log(education);

/*
var projects = { 
  	"website": [{
	   "title": "SuperSmash MMA.com",
	   "dates": "2014",
  		"description" : "MMA and Martial Arts themed news/media website. *Work in progress*.",
		"projpics": [ 
			"https://www.jiujitsutimes.com/wp-content/uploads/conor-3.jpg", 
			"http://a.fssta.com/content/dam/fsdigital/fscom/UFC/images/2016/02/07/020716-UFC-Fight-Night-Hendricks-v-Thompson-PI-CH.vadapt.664.high.66.jpg"] 
			
			}]}  


projects.display = function() {
	for (var project in projects.website) {

$("#projects").append(HTMLprojectStart);
console.log(HTMLprojectStart);

var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.website[project].title);
	$(".project-entry:last").append(formattedProjectTitle);
	console.log(formattedProjectTitle);

var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.website[project].dates);
	$(".project-entry:last").append(formattedProjectDates);
	console.log(formattedProjectDates);

var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.website[project].description);
	$(".project-entry:last").append(formattedProjectDescription);
	console.log(formattedProjectDescription);

if (projects.website[project].projpics.length > 0) {	
	for (image in projects.website[project].projpics) {
		var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.website[project].projpics[image]);

$(".project-entry:last").append(formattedProjectImages);
														}
													}
											}
 								}
	projects.display() ; 


$(function() {
  // View the selected photo at full size
  $(".photo-image").click(function(){
    $(this).addClass("photo-selected");
    $(this).parent().addClass("photo-x");
    //new line of code:
    //$(".project-entry").prepend(HTMLprojectImageOverlay);
    $("#overlay").show();
  });
  
  // Close the full size view when #overlay is clicked
  $("#overlay").click(function(){
    $(".photo-image").removeClass("photo-selected");
    $(".photo-x").removeClass("photo-x");
    $("#overlay").hide();
  });
});

// Close full size view if "esc"
$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    $(".photo-image").removeClass("photo-selected");
    $("#overlay").hide();
  }
});




//$("#mapDiv").append(googleMap);

//var inforWindow = new google.maps.InfoWindow ({
 //content: name
//});

//google.maps.event.addListner(marker, 'click', function(){

//	});

//$(document).click(function(loc) {
//	var x = loc.pageX;
//	var y = loc.pageY;
//	logClicks(x,y);
//} )


//$(document).click(function(loc) {
//	console.log(loc.pageX, loc.pageY);
//} )


*/


