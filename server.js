var express = require('express');
var app = express();
app.use(function(req, res, next) {
  var oneof = false;
  if (req.headers.origin) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    oneof = true;
  }
  if (req.headers['access-control-request-method']) {
    res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
    oneof = true;
  }
  if (req.headers['access-control-request-headers']) {
    res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
    oneof = true;
  }
  if (oneof) {
    res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
  }
  res.header("Access-Control-Allow-Credentials", "true");

  // intercept OPTIONS method
  if (oneof && req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});
var b = [
{id: 0, name: 'sadsasd', source: "TBO", amount: 22.34, duration: '18 Mo',
    businessInformation: {
      address1: null,
      address2: 'xydsfsz',
      city: 'Gurgadsfon',
      state: 'Haryfsdana'
    },
   nextStep: 'Contact Business', owner: 'SD', completed: '20%', received: 'June 10', 
   stageId:3 },
  {id: 1, name: 'sadsasd', source: "TBO", amount: 22.34, duration: '18 Mo',
    businessInformation: {
      address1: null,
      address2: 'xyz',
      city: 'Gurgaon',
      state: 'Haryana'
    },
   nextStep: 'Contact Business', owner: 'SD', completed: '20%', received: 'June 10', 
   stageId:3 },
  {id: 2, name: 'kljl3453', source: "TBO", amount: 22.34, duration: '18 Mo',
  businessInformation: {
      address1: 'dsfsdf fsdfsd',
      address2: 'ter ter te tre t',
      city: 'XXX',
      state: 'YYY'
    },
     nextStep: 'Contact Business', owner: 'SD', completed: '20%', received: 'June 10' ,
     stageId:3},
  {id: 3, name: 'ACB3', source: "TBO", amount: 22.34, duration: '18 Mo',
  businessInformation: {
      address1: null,
      address2: 'xyz',
      city: 'YYY',
      state: 'GDFG'
    },
   nextStep: 'Contact Business', owner: 'SD', completed: '20%', received: 'June 10', 
   stageId:3 },
  {id: 4, name: 'XYZ4', source: "TBO", amount: 22.34, duration: '18 Mo', nextStep: 'Contact Business', owner: 'SD', completed: '20%', received: 'June 10', stageId:3 },
  {id: 5, name: 'ACB5 sdfsd', source: "TBO", amount: 22.34, duration: '18 Mo', nextStep: 'Contact Business', owner: 'SD', completed: '20%', received: 'June 10', stageId:4 },
  {id: 6, name: 'XYZ6 f', source: "TBO", amount: 22.34, duration: '18 Mo', nextStep: 'Contact Business', owner: 'SD', completed: '20%', received: 'June 10', stageId:5 },
  {id: 7, name: 'ACB1', source: "TBO", amount: 22.34, duration: '18 Mo', nextStep: 'Contact Business', owner: 'SD', completed: '20%', received: 'June 10', stageId:5 },
  {id: 8, name: 'XYZ2 sdf', source: "TBO", amount: 22.34, duration: '18 Mo', nextStep: 'Contact Business', owner: 'SD', completed: '20%', received: 'June 10' ,stageId: 1},
  {id: 9, name: 'ACB3 fsdf', source: "TBO", amount: 22.34, duration: '18 Mo', nextStep: 'Contact Business', owner: 'SD', completed: '20%', received: 'June 10', stageId:7 },
  {id: 10, name: 'XYZ4 qq', source: "TBO", amount: 22.34, duration: '18 Mo', nextStep: 'Contact Business', owner: 'SD', completed: '20%', received: 'June 10', stageId:3 },
  {id: 11, name: 'ACB5 ;lk;', source: "TBO", amount: 22.34, duration: '18 Mo', nextStep: 'Contact Business', owner: 'SD', completed: '20%', received: 'June 10', stageId:6 },
  {id: 12, name: 'XYZ6', source: "TBO", amount: 22.34, duration: '18 Mo', nextStep: 'Contact Business', owner: 'SD', completed: '20%', received: 'June 10', stageId:7 }
];


app.get('/pipeline', function (req, res) {
	var p = [
				    {id:1, name: 'All Active', count: 2843},
            {id:2, name: 'Contacted', count: 943},
            {id:3, name: 'New Application', count: 243},
            {id:4, name: 'Underwriting', count: 143},
            {id:5, name: 'Documentation', count: 43},
            {id:6, name: 'Sanctioned', count: 243},
            {id:7, name: 'Funded', count: 843}
			];
  res.json(p);
});
app.get('/borrowers', function (req, res) { 
  res.json(b);
});
app.get('/borrowers/:id', function(req, res) {
  var id = req.params.id;
  res.json(b[id]);
});
var server = app.listen(3000, function () {

  console.log("running server....");
});
  /*
var b = { 
  id: 1,
  name: 'Bharat Travel',
  sourceId: 1, 
  sourceName: 'TBO',
  loanAmount: 2300000,
  currency: 'INR',
  loanDuration: 18 //Months
  recievedDate: new Date(), 
  loanRequestedDate: new Date(),
  ownerId: 234,
  ownerName: 'ABC',
  nextStepId: 5,
  nextStepName: 'Pull Credit Report',
  completed: 45,//in %
  pipelineStage: 24//pipeline stage id
  pipelineStageName: 'Contacted',
  alertStatus: 1 //'new' 'alert' etc
}


  var b = [
		            {name: 'ACB', source: "TBO", amount: 22.34, duration: '18 Mo', nextStep: 'Contact Business', owner: 'SD', completed: '20%', received: 'June 10' },
		            {name: 'XYZ', source: "TBO", amount: 22.34, duration: '18 Mo', nextStep: 'Contact Business', owner: 'SD', completed: '20%', received: 'June 10' }
                ]; 
  res.json(b);
});



var pipelineStages = [
  {id:1, name: 'All Active'},
  {id:2, name: 'Contacted'},
  {id:3, name: 'New Application'},
  {id:4, name: 'Underwriting'},
  {id:5, name: 'Documentation'},
  {id:6, name: 'Sanctioned'},
  {id:7, name: 'Funded'}
];
var borrowerProcessingSteps = [
  {id: 1, name: 'Contact Business'},
  {id: 2, name: 'Add Promotor Information'},
  {id: 3, name: 'Add Business Finacials'},
  {id: 4, name: 'Pull Credit Report'},
  {id: 5, name: 'Upload Documents'},
  {id: 6, name: 'Add Lenders'}
];
*/



