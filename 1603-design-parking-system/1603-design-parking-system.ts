class ParkingSystem {
    arr
    
    constructor(big: number, medium: number, small: number) {
        this.arr = [big, medium, small]
    }

    addCar(carType: number): boolean {
        if (this.arr[carType - 1] === 0) {
            return false
        } else {
            this.arr[carType - 1]--
            return true
        }
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */