export interface IStudent {
    id: number,
    name:string,
    grade:string,
}

export const students: IStudent[] = [
    { id: 1, name: 'Alice Johnson', grade: 'A' },
    { id: 2, name: 'Bob Smith', grade: 'B' },
    { id: 3, name: 'Charlie Brown', grade: 'C' },
    { id: 4, name: 'Diana Prince', grade: 'A' },
    { id: 5, name: 'Edward Elric', grade: 'B' }
  ];