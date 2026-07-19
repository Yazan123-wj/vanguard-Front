/**
 * Reference art: light dotted field, vermilion squares cascading on the left
 * (incredibles.dev card grammar).
 */
export function StackCardArt() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[5/3.4] w-full overflow-hidden rounded-2xl bg-[#E8E8E8]"
      style={{
        backgroundImage:
          'radial-gradient(rgb(10 10 10 / 0.12) 1px, transparent 1px)',
        backgroundSize: '8px 8px',
      }}
    >
      <div className="absolute top-[10%] left-[6%] h-[80%] w-[62%]">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-[4px] bg-vermilion"
            style={{
              width: '56%',
              aspectRatio: '1',
              top: `${i * 8}%`,
              left: `${i * 7}%`,
              opacity: 0.28 + i * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
}
