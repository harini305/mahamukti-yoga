import images from '@/lib/images.json';

// Responsive <img> for the pre-generated WebP derivatives in public/images.
export default function Img({ name, sizes = '100vw', priority = false, alt, position, className }) {
  const image = images[name];
  if (!image) throw new Error(`Unknown image "${name}"`);
  const srcSet = image.widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(', ');
  const fallback = image.widths[Math.min(1, image.widths.length - 1)];

  return (
    <img
      src={`/images/${name}-${fallback}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt ?? image.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding={priority ? 'sync' : 'async'}
      style={position ? { objectPosition: position } : undefined}
      className={className}
    />
  );
}
