import { devices } from '@playwright/test';
import { BROWSER_NAME, BROWSER_USE } from "../enums/browser.enum";
import ICapabilities, { ICapabilitieProjects } from "../interfaces/ICapabilities";
import { loadJson } from './data.util';

export const loadCapabilities = ():ICapabilities => {
    const jsonData = loadJson('capabilities');

    const buildBrowsersConfig = (argConfig: string[]): ICapabilitieProjects[] => {
        let res:ICapabilitieProjects [] = [];

        for (const elBrowser of argConfig) {
            res.push({
                name: BROWSER_NAME[elBrowser.toUpperCase()],
                use: {...devices[BROWSER_USE[elBrowser.toUpperCase()]]}
            });
        }

        return res;
    };

    const capabilitiesConfig: ICapabilities = {
        testDir: jsonData.testDir,
        browsers: buildBrowsersConfig(jsonData.browsers),
        parallel: jsonData.parallel || false
    };


    console.log(
        `--- LOAD CAPABILITIES ---\n`,
        JSON.stringify(capabilitiesConfig),
        `\n---***---`
    );

    return capabilitiesConfig;
}