const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static("public"));

//A array of data that will print out as our json file data.
const housePlans = [
    {
        "name": "Farmhouse",
        "size": 2000,
        "bedrooms": 3,
        "bathrooms": 2.5,
        "features": [
            "wrap around porch",
            "attached garage"
        ],
        "main_image": "farm.webp",
        "floor_plans": [
            {
                "name": "Main Level",
                "image": "farm-floor1.webp"
            },
            {
                "name": "Basement",
                "image": "farm-floor2.webp"
            }
        ]
    },
    {
        "name": "Mountain House",
        "size": 1700,
        "bedrooms": 3,
        "bathrooms": 2,
        "features": [
            "grand porch",
            "covered deck"
        ],
        "main_image": "mountain-house.webp",
        "floor_plans": [
            {
                "name": "Main Level",
                "image": "mountain-house1.webp"
            },
            {
                "name": "Optional Lower Level",
                "image": "mountain-house2.webp"
            },
            {
                "name": "Main Level Slab Option",
                "image": "mountain-house3.jpg"
            }
        ]
    },
    {
        "name": "Lake House",
        "size": 3000,
        "bedrooms": 4,
        "bathrooms": 3,
        "features": [
            "covered deck",
            "outdoor kitchen",
            "pool house"
        ],
        "main_image": "farm.webp",
        "floor_plans": [
            {
                "name": "Main Level",
                "image": "lake-house1.webp"
            },
            {
                "name": "Lower Level",
                "image": "lake-house2.webp"
            }
        ]
    }
];

//Get a file request
app.get("/", (request, response)=> {
    response.sendFile(__dirname + "/index.html");
});

//Send this json file.
app.get("/api/house_plans", (request, response)=> {
    response.json(housePlans);
});

//Create app localhost port.
app.listen(3002, () => {
    console.log("Listening...");
});