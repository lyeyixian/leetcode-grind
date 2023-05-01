function average(salary: number[]): number {
    const min = Math.min(...salary)
    const max = Math.max(...salary)
    
    return salary
        .filter(sal => sal !== min && sal !== max)
        .reduce((a, b) => a + b) / (salary.length - 2)
};