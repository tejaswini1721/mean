const fs = require("fs");

const Promise = require("bluebird");
Promise.promisifyAll(fs); // Promisification of FS Module

let readDemo = () => {
    // fs.readFile();

    const filePath1 = "/Users/research/Desktop/temp.txt";
    // fs.readFileAsync(filePath1, { encoding: "utf-8" });
    fs.readFileAsync(filePath1, { encoding: "utf-8" })
        .then((data) => {
            // file 1 done
            console.log(data);

            const filePath2 = "/Users/research/Desktop/temp.txt";
            return fs.readFileAsync(filePath2, { encoding: "utf-8" });
        })
        .then((data) => {
            // file 2 done
            console.log(data);

            const filePath3 = "/Users/research/Desktop/temp.txt";
            return fs.readFileAsync(filePath3, { encoding: "utf-8" });
        })
        .then((data) => {
            // file 3 done
            console.log(data);
        });
};

readDemo();