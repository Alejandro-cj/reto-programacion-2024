function calculateWinner() {
    const movesInput = document.getElementById('movesInput').value.trim();
    const moves = movesInput.split(' ');
    let player1Wins = 0;
    let player2Wins = 0;

    const winningMoves = {
        '🗿': ['✂️', '🦎'],
        '📄': ['🗿', '🖖'],
        '✂️': ['📄', '🦎'],
        '🦎': ['📄', '🖖'],
        '🖖': ['🗿', '✂️']
    };

    moves.forEach(move => {
        const [move1, move2] = move.split('');
        if (winningMoves[move1].includes(move2)) {
            player1Wins++;
        } else if (winningMoves[move2].includes(move1)) {
            player2Wins++;
        }
    });

    let result = '';
    if (player1Wins > player2Wins) {
        result = 'Player 1';
    } else if (player2Wins > player1Wins) {
        result = 'Player 2';
    } else {
        result = 'Tie';
    }

    document.getElementById('result').innerText = `El ganador es: ${result}`;
}
