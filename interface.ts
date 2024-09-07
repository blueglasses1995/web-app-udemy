const STONE = 0
const PAPER = 1
const SCISSORS = 2

class RandomCommandGenerator {
    generate() {
        return Math.floor(Math.random() * 3)
    }
    
    generateArray() {
        return []
    }
}
