import './BackgroundStars.css';

const starDefinitions = Array.from({ length: 150 }, (_, index) => {
  const columns = 15;
  const rows = 10;
  const col = index % columns;
  const row = Math.floor(index / columns);
  const cellWidth = 100 / columns;
  const cellHeight = 100 / rows;
  const top = (row + 0.5) * cellHeight + (Math.random() - 0.5) * cellHeight * 0.6;
  const left = (col + 0.5) * cellWidth + (Math.random() - 0.5) * cellWidth * 0.6;
  const duration = 8 + Math.random() * 10;
  const delay = Math.random() * 6;
  const size = 8 + Math.random() * 24;
  const opacity = 0.45 + Math.random() * 0.55;

  return {
    top: `${Math.min(98, Math.max(2, top)).toFixed(1)}%`,
    left: `${Math.min(98, Math.max(2, left)).toFixed(1)}%`,
    duration: `${duration.toFixed(1)}s`,
    delay: `${delay.toFixed(2)}s`,
    size: `${size.toFixed(1)}px`,
    opacity: opacity.toFixed(2),
  };
});

function BackgroundStars() {
  return (
    <div className="BackgroundStars" aria-hidden="true">
      {starDefinitions.map((star, index) => (
        <span
          key={index}
          className="BackgroundStars__star"
          style={{
            top: star.top,
            left: star.left,
            '--bgstars-duration': star.duration,
            '--bgstars-delay': star.delay,
            '--bgstars-size': star.size,
            '--bgstars-opacity': star.opacity,
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundStars;
