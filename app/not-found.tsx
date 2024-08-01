"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  MouseEvent,
} from "react";
import { Rocket, User, Plane, Star, Home } from "lucide-react";

// Types
interface Star {
  x: number;
  y: number;
  size: number;
}

interface Alien {
  x: number;
  y: number;
}

interface Position {
  x: number;
  y: number;
}

const InteractiveSpaceOdyssey404: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [shipPosition, setShipPosition] = useState<Position>({ x: 50, y: 50 });
  const [aliens, setAliens] = useState<Alien[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(
    "Oh no! You've drifted into the 404 dimension!"
  );
  const gameAreaRef = useRef<HTMLDivElement>(null);

  // Initialize stars and aliens
  useEffect(() => {
    setStars(
      Array.from({ length: 100 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
      }))
    );
  }, []);

  // Handle ship movement
  const moveShip = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (gameAreaRef.current) {
      const { left, top, width, height } =
        gameAreaRef.current.getBoundingClientRect();
      setShipPosition({
        x: ((e.clientX - left) / width) * 100,
        y: ((e.clientY - top) / height) * 100,
      });
    }
  }, []);

  // Game loop
  useEffect(() => {
    let gameLoopInterval: NodeJS.Timeout;
    if (gameStarted && !gameOver) {
      gameLoopInterval = setInterval(() => {
        setAliens((prev) =>
          prev.map((alien) => ({
            x: (alien.x + (Math.random() - 0.5) * 2 + 100) % 100,
            y: (alien.y + (Math.random() - 0.5) * 2 + 100) % 100,
          }))
        );

        setScore((prev) => prev + 1);
      }, 100);
    }
    return () => clearInterval(gameLoopInterval);
  }, [gameStarted, gameOver]);

  // Collision detection
  useEffect(() => {
    if (gameStarted && !gameOver) {
      const checkCollision = () => {
        aliens.forEach((alien) => {
          const distance = Math.sqrt(
            Math.pow(alien.x - shipPosition.x, 2) +
              Math.pow(alien.y - shipPosition.y, 2)
          );
          if (distance < 5) {
            setGameOver(true);
          }
        });
      };
      checkCollision();
    }
  }, [aliens, shipPosition, gameStarted, gameOver]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setShipPosition({ x: 50, y: 50 });
    setAliens(
      Array.from({ length: 5 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
      }))
    );
    setMessage("Navigate your ship to escape the 404 dimension!");
  };

  return (
    <div
      ref={gameAreaRef}
      className="relative h-[calc(100vh-64px)] w-full  bg-gradient-to-b from-purple-900 via-blue-900 to-black overflow-hidden "
      onMouseMove={gameStarted && !gameOver ? moveShip : undefined}
    >
      {/* Stars */}
      {stars.map((star, index) => (
        <Star
          key={index}
          className="absolute text-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            fontSize: `${star.size}px`,
          }}
        />
      ))}

      {/* Wormhole */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-50 animate-spin-slow" />
        <div className="absolute inset-4 bg-black rounded-full" />
      </div>

      {/* Spaceship */}
      {gameStarted && (
        <Rocket
          className="absolute w-12 h-12 text-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out"
          style={{ left: `${shipPosition.x}%`, top: `${shipPosition.y}%` }}
        />
      )}

      {/* Aliens */}
      {gameStarted &&
        aliens.map((alien, index) => (
          <User
            key={index}
            className="absolute w-8 h-8 text-green-400"
            style={{ left: `${alien.x}%`, top: `${alien.y}%` }}
          />
        ))}

      {/* Planes */}
      <Plane className="absolute w-20 h-20 text-red-400 top-1/4 left-1/4 animate-float" />
      <Plane className="absolute w-16 h-16 text-blue-400 bottom-1/4 right-1/4 animate-float-delay" />

      {/* UI Elements */}
      {gameStarted && !gameOver && (
        <div className="absolute top-4 left-4 text-white">
          <p className="text-xl font-bold">Score: {score}</p>
        </div>
      )}

      {/* Game Over or Welcome Screen */}
      {(!gameStarted || gameOver) && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">
              {gameOver ? "Game Over" : "404"}
            </h1>
            <p className="text-xl text-blue-300 mb-4">{message}</p>
            <p className="text-lg text-yellow-300 mb-8">
              {gameOver
                ? `You survived ${score} seconds in the void!`
                : "Navigate your ship to escape the 404 dimension!"}
            </p>
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              onClick={startGame}
            >
              {gameOver ? "Try Again" : "Start Your Odyssey"}
            </button>
          </div>
        </div>
      )}

      {/* Home Button */}
      <a
        href="/"
        className="absolute bottom-4 right-4 text-white hover:text-blue-300 transition-colors"
      >
        <Home className="w-8 h-8 " />
      </a>
    </div>
  );
};

export default InteractiveSpaceOdyssey404;

<style jsx>{`
  @keyframes twinkle {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  @keyframes float-delay {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  .animate-twinkle {
    animation: twinkle 4s infinite;
  }
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
  .animate-float {
    animation: float 5s ease-in-out infinite;
  }
  .animate-float-delay {
    animation: float-delay 7s ease-in-out infinite;
  }
  .cursor-none {
    cursor: pointer;
  }
`}</style>;
