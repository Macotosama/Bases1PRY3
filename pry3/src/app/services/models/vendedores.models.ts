export interface Vendedor {
    BusinessEntityID: number
    FullName: string
    SalesQuota: number
    JobCandidateID: number
    Gender: string
    VacationHours: string
    OrganizationLevel: number
    SickLeaveHours: string
    PayFrequency: number
    Rate: number
    CommissionPct: number
    SalesLastYear: number
    DepartmentName: string
    GroupName: string
}

export interface Peras {
    BusinessEntityID: number
    FirstName: string
    LastName: string
}

export interface Jaimicos {
    DeparmentiD: number
    jobTitle: string
    BusinessEntityID: number
    Nombre: string
    SegundoNombre: string
    Apellido: string
    startTimeShift: string
    endTimeShift: string
}