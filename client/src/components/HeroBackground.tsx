type HeroBackgroundProps = {
  image: string;
  alt: string;
};

export function HeroBackground({ image, alt }: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0">
      <img
        src={image}
        alt={alt}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
    </div>
  );
}
