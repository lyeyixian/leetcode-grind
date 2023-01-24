function snakesAndLadders(board: number[][]): number {
    const length = board.length
    const reversedBoard = []
    
    for (const row of board) {
        reversedBoard.unshift(row)
    }
    
    const queue = []
    const visited = new Set()
    
    queue.push({ square: 1, moves: 0 })
    
    while (queue.length) {
        const { square, moves } = queue.shift()
        
        for (let i = 1; i <= 6; i++) {
            let nextSquare = square + i
            const [row, col] = squareToCoord(nextSquare, length)
            const boardValue = reversedBoard[row][col]
            
            if (boardValue && boardValue !== -1) {
                nextSquare = boardValue
            }
            
            if (nextSquare === length * length) {
                return moves + 1
            }
            
            if (!visited.has(nextSquare)) {
                visited.add(nextSquare)
                queue.push({ square: nextSquare, moves: moves + 1})
            }
        }
    }
    
    return -1
};

function squareToCoord(square, length) {
    const row = Math.floor((square - 1) / length)
    let col = (square - 1) % length
    
    if (row % 2 === 1) {
        col = length - 1 - col
    }
    
    return [row, col]
}