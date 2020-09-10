const fs = require("fs");


let readDemo = () => {
    console.log("file will be read here");

    const filePath = "C:\Users\NDC\Desktop\mean\temp.txt";
    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
        console.log(data);
    });


    let readDemo1 = () => {
        try {
            console.log("file will be read here");

            const filePath = "C:\Users\NDC\Desktop\mean\temp.txt";
            const fileData = fs.readFile(filePath, { encoding: "utf-8" });
            console.log(fileData);
        }
        catch (err) {
            console.log(err);
        }

    };

    let readDemo2 = () => {
        try {
            console.log("file will be read here");

            const filePath = "C:\Users\NDC\Desktop\mean\temp.txt";
            const fileData = fs.readFile(filePath, { encoding: "utf-8" });
            console.log(fileData);
        }
        catch (err) {
            console.log("Their is some error");
        }
    };

    module.exports = {
        readDemo1,
        readDemo2,

    };

    readDemo1();


    //non blocking:: use of call back function::Always good to use
    //fs.readFile();

    //blocking
    // fs.readFileSync();

    //let num = 100;
};



let writeDemo = () => {
    console.log("file will write done here");
};


