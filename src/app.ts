import * as readline from 'readline-sync';
import * as request from 'request';
import * as fs from 'fs';

console.log('\n');
console.log('Please input appleID of iOS App which you want to download screenshots.');
console.log('>');
const appleID: string = readline.question();
const url: string     = `https://itunes.apple.com/lookup?id=${appleID}&entity=software`;

const options = {
    url: url,
    method: 'GET'
};

request(options, (error, response, body) => {
    try {
        const json = JSON.parse(body)
        const appDetailJSON = json['results'][0]
        const title: string = appDetailJSON['trackName'];
        const iPhoneScreenshotURLs: string[] = appDetailJSON['screenshotUrls'];
        const iPadScreenshotURLs: string[]   = appDetailJSON['ipadScreenshotUrls'];
        const screenshotURLs: string[]       = iPhoneScreenshotURLs.concat(iPadScreenshotURLs);
        const directoryPath: string = process.env.HOME + `/Desktop/${title}/`;

        fs.mkdirSync(directoryPath);
        downloadScreenshot(directoryPath, screenshotURLs, 0)
    } catch(error) {
        console.log(error);
        console.log('😵😵😵\nSorry, Failed to load iOS app screenshots.\nPlease confirm appleID what you inputted, network and so on.');
    }
});

function downloadScreenshot(path: string, urls: string[], index: number) {
    request({method: 'GET', url: urls[index], encoding: null}, (error, response, body) => {
        fs.writeFileSync(path + `/screenshot-${index + 1}.jpg`, body, 'binary');
        if (index < urls.length - 1) {
            downloadScreenshot(path, urls, index + 1)
        }
    });
}