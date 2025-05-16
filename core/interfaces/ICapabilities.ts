export interface ICapabilitieProjects {
    name: string,
    use: any
}

export default interface ICapabilities {
    testDir: string,
    browsers: ICapabilitieProjects[],
    parallel?: boolean | false
}