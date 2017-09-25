
/*1-About Section variables*/
var HTMLbioPic = '<img src=%data% alt="..." id="profilePic" class="col-xs-6" />';
var HTMLheaderName =  '<h1>%data%</h1>';
var HTMLbirth = '<h2><i>D.O.B: %data% </i></h2>';
var HTMLcurrentLocation = '<h2><i>Location: %data% </i></h2>';
var HTMLabout = '<p>%data%</p>';

/*2-Contact variables for EACH contact*/
var HTMLcontact = '<div class="contact">%data%</div>';
var HTMLlink = '<div class="pageIcon"><a href="%data%" class="link"></a></div>';
var HTMLpageType = '<h4>%data%</h4>';

/*3-Progress Bar variables*/
/*--Combine the Three Variables to create each Progress Bar*/
var HTMLbarChartData = '<div class="progress col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12"><div class="progress-bar" role="progressbar" aria-valuenow="%data%" aria-valuemin="0" '; 
var HTMLbarChartPercentage = 'aria-valuemax="100" style="width: %data%;">';
var HTMLbarChartText = '%data%</div></div>';

/*4-variables for BOTH Education and Projects.*/ /*MAYBE DELETE AND MAKE MORE EFFICIENT*/
/*--Starting Variables*/
//var HTMLonlineEducation = '<div id="onlineEdu"><h6>Online Education</h6><ul id="onlineList"></ul></div>';
var HTMLonlineListItem = '<li class="onlineListItem"><i>%data%</i></li>';

//var HTMLotherEducation = '<div id="otherEdu"><h6>Other Education</h6><ul id="otherList"></ul></div>';
var HTMLotherListItem = '<li class="otherListItem"><i>%data%</i></li>';

//var HTMLprojects = '<div id="projects"><h5>Projects</h5><ul id="projectsList"></ul></div>';
var HTMLprojectsListItem = '<li class="projectListItem"><h6>%data%</h6>';

/*--Ending Variables*/
var HTMLdescription = '<p>%data%</p></li>';
var HTMLlistItemTitleDescription = '<li class="listItem"><h6>item</h6><p>description</p></li>';
var HTMLitemTitle = '<li class="listItem"><h6>title</h6></li>';
var HTMLendItem = '</li>';

/*5-Work Experience HTML*/
//var HTMLwork = '<div id="work"><h5>Work Experience</h5><ul id="workList"></ul>';
var HTMLjobRole = '<li class="jobListItem"><h6>%data%</h6></li>';
var HTMLemployerDates = '<h6><i>%data%</i></h6>';
/*END of Work Experience variables.*/

