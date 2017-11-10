const express = require('express')
const cors = require("cors");

var instructors = [
  {
  "id": 1,
  "FullName": "Kyle Coberly",
  "Title": "Faculty Director",
  "NumberOfDogs": 0
  },{
  "id": 2,
  "FullName": "Danny Fritz",
  "Title": "Lead Instructor",
  "NumberOfDogs": 0
  },{
  "id": 3,
  "FullName": "CJ Reynolds",
  "Title": "Lead Instructor",
  "NumberOfDogs": 0
  },{
  "id": 4,
  "FullName": "Brooks Patton",
  "Title": "Lead Instructor",
  "NumberOfDogs": 0
  },{
  "id": 5,
  "FullName": "Roberto Ortega",
  "Title": "Lead Instructor",
  "NumberOfDogs": 1
  },{
  "id": 6,
  "FullName": "Chad Drummond",
  "Title": "Instructor",
  "NumberOfDogs": 0
  },{
  "id": 7,
  "FullName": "Kim Schlesinger",
  "Title": "Instructor",
  "NumberOfDogs": 0
  },{
  "id": 8,
  "FullName": "Peter Ostiguy",
  "Title": "Associate Instructor",
  "NumberOfDogs": 1
  },{
  "id": 9,
  "FullName": "Cass Torske",
  "Title": "Resident",
  "NumberOfDogs": 1
  },{
  "id": 10,
  "FullName": "Matt Winzer",
  "Title": "Resident",
  "NumberOfDogs": 2
  },{
  "id": 11,
  "Full Name": "Aaron Goodman",
  "Title": "Resident",
  "NumberOfDogs": 0
  },
];

function findById(data, id){
    for (let i = 0; i < data.length; i++){
        if (data[i].id == id){
            return data[i];
        }
    }
    return null;
}

const app = express();
app.use(cors());

app.get("/", function (request, response) {
  response.json(data: instructors);
}
);

app.get("/:id", function (request, response) {
  var record = findById(instructors, request.params.id)
  if (!record){
    response.status(404);
    response.json({
      error: {
        message: "No record found!"
      }
    });
  }
  response.json({data: record});
}
);

app.listen(process.env.PORT || 3000);
