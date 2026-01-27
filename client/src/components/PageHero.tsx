import { HeroBackground } from "@/components/HeroBackground";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  eyebrow?: string;
};

export function PageHero({ title, subtitle, image, alt, eyebrow }: PageHeroProps) {
  return (
    <section className="relative min-h-[360px] overflow-hidden text-white">
      <HeroBackground image={image} alt={alt} />
      <div className="container mx-auto px-4 relative z-10 flex min-h-[360px] items-center py-16">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
