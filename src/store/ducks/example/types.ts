// Action types
export enum TYPES  {
    EXAMPLE =  "EXAMPLE"
}

// Data types
export interface INTERFACE {
    id: number
    name: string
}

// State types
export interface STATE {
    readonly data: INTERFACE[]
    readonly loading: boolean
    readonly error: boolean
}