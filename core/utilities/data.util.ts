import fs from "fs";

export const loadJson = (argFileName) => {
    const jsonData = JSON.parse(fs.readFileSync(`${argFileName}.json`, 'utf8'));
    return jsonData;
}