class ParkingSystem {
    big
    medium
    small
    
    constructor(big: number, medium: number, small: number) {
        this.big = big
        this.medium = medium
        this.small = small
    }

    addCar(carType: number): boolean {
        if (carType === 1) {
            if (this.big === 0) {
                return false
            } else {
                this.big--
                return true
            }
        } else if (carType === 2) {
            if (this.medium === 0) {
                return false
            } else {
                this.medium--
                return true
            }
        } else {
            if (this.small === 0) {
                return false
            } else {
                this.small--
                return true
            }
        }
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */