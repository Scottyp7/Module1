
const highSchool = {
    "School":
    [
    {
        "Teachers":[ {

            "name":"jill",
            "job":"science"
        },
        {
            "name":"paul",
            "job":"maths"
        }
        ],
    
        "Students":[ {
            "name":"george",
            "year":"12"
        },
        {
            "name":"donald",
            "year":"11"        }]
    }
    ]
};

console.log(highSchool.School[0].Teachers[0]);
console.log(highSchool.School[0].Students[1]);