export interface WorkRoleInfo {
    title: string,
    anchor: string,
    description: string,
}

export interface WorkRole {
    company: string,
    companyLink: string,
    jobTitle: string,
    description: string,
    skills?: Array<string>,
    moreInfo?: Array<WorkRoleInfo>
}

export interface WorkRoles {
    rolls: Array<WorkRole>
}
