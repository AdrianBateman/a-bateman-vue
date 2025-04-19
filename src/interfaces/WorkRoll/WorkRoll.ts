export interface WorkRollInfo {
    title: string,
    anchor: string,
    description: string,
}

export interface WorkRoll {
    company: string,
    jobTitle: string,
    description: string,
    moreInfo?: Array<WorkRollInfo>
}

export interface WorkRolls {
    rolls: Array<WorkRoll>
}
