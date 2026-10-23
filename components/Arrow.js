// Drawn arrow for text links. An SVG avoids the → / ↓ glyphs, which pull in extra font subset files.
export default function Arrow({ down = false }) {
  return (
    <svg
      className={down ? 'arrow arrow--down' : 'arrow'}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d={down ? 'M7 1v11M3 8l4 4 4-4' : 'M1 7h11M8 3l4 4-4 4'} />
    </svg>
  );
}
