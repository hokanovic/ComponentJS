//Tid
//Distans
//Puls


//Tid: Varaktighet mm:ss
//Distans: Varaktighet km
//Puls: Över/Under ___ slag/min'

export type StepType = {
    kind: string
    unit: string // 'puls' | 'foo' | 'bar
    value: number
}



export type Todo = {
    text: string
    complete: boolean
  };