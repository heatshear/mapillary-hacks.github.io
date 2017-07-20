var high = [];
var med = [1,3,4,5,9,10,15];
var low = [2,6,7,8,11,12,13,14,16,17,18,19,20,21,22,23,24,25];

var maxdate = Date.now(); //don't change this
var mindate = (1498204800000); //set to show epoch milliseconds of the start date
var mindate2 = new Date(mindate).toISOString();

var partnerLogo = 'https://secure.meetupstatic.com/photos/event/f/7/a/highres_438483962.jpeg';
var partnerLink = 'https://www.meetup.com/MaptimeSEA/'

var challengeTitle = 'Seattle Challenge'; //text in the slider
var challengeDate = 'June 23rd - July 31st, 2017'
var docTitle = 'Complete the Map: Seattle - Mapillary'; //text next to favicon on browser window

var challengeLng = -122.3111343383789; //center of the map
var challengeLat = 47.61761985489538; //center of the map
var challengeZoom = 14; //zoom for desktop browser
var mobileZoom = 12; //should be challengeZoom minus 2 usually

var facebookShare = 'url.com'; //link for facebook sharing
var twitterShare = 'url.com'; //link for twitter sharing
var emailShare = 'mail.com'; //link for email sharing
