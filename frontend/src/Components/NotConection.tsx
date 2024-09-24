import { useState } from 'react';

export const NotConection = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (index: number) => {
    if (board[index] || !isPlayerTurn || winner) return;
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsPlayerTurn(false);

    const winnerCheck = checkWinner(newBoard);
    if (winnerCheck) {
      setWinner(winnerCheck);
      return;
    }

    setTimeout(() => computerMove(newBoard as (string | null)[]), 500);
  };

  const checkWinner = (board: (string | null)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const computerMove = (newBoard: (string | null)[]) => {
    let bestScore = -Infinity;
    let move = null;

    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] === null) {
        newBoard[i] = 'O';
        const score = minimax(newBoard, false);
        newBoard[i] = null;

        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }

    if (move !== null) {
      newBoard[move] = 'O';
      setBoard(newBoard);
      setIsPlayerTurn(true);

      const winnerCheck = checkWinner(newBoard);
      if (winnerCheck) {
        setWinner(winnerCheck);
      }
    }
  };

  const minimax = (newBoard: (string | null)[], isMaximizing: boolean) => {
    const winner = checkWinner(newBoard);
    if (winner === 'X') return -10;
    if (winner === 'O') return 10;
    if (newBoard.every((cell) => cell !== null)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < newBoard.length; i++) {
        if (newBoard[i] === null) {
          newBoard[i] = 'O';
          const score = minimax(newBoard, false);
          newBoard[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < newBoard.length; i++) {
        if (newBoard[i] === null) {
          newBoard[i] = 'X';
          const score = minimax(newBoard, true);
          newBoard[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null)); // Limpia el tablero
    setIsPlayerTurn(true); // Restablece el turno del jugador
    setWinner(null); // Restablece el ganador
  };

  const renderCell = (index: number) => (
    <div
      key={index}
      className="flex justify-center items-center text-5xl font-bold border-2 border-white cursor-pointer h-[100px] w-[100px] text-white hover:bg-zinc-800 transition-colors duration-300"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </div>
  );

  return (
    <div className="fixed top-0 left-0 flex w-screen h-screen bg-black z-[9999] items-center justify-center flex-col">
      <h1 className="text-white font-bold text-4xl">
        No hay conexión a internet
      </h1>
      <p className="text-white font-medium text-xl">
        Pero tranquilo, NextStep siempre piensa en tí :)
      </p>
      {winner ? (
        <>
          <h2 className="text-white font-bold text-4xl mt-8">
            {winner === 'X' ? '¡Ganaste!' : '¡Perdiste!'}
          </h2>
        </>
      ) : (
        <div className="grid grid-cols-[repeat(3,100px)] grid-rows-[repeat(3,100px)] mt-8">
          {board.map((_, index) => renderCell(index))}
        </div>
      )}
      <button onClick={resetGame} className='bg-white mt-6 px-3 py-2 rounded-lg font-medium'>Reiniciar juego</button>
    </div>
  );
};
