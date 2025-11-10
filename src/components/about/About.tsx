export const About = () => {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-24"
      id="about"
    >
      <h2 className="mb-24 text-lg">Explore about me</h2>
      <div className="absolute top-1/2 h-1 w-64 -translate-y-12 transform bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent rotate-90" />
      <div className="h-12 w-12 rounded-full border-2 border-emerald-600 bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-900 hover:scale-105 transition-transform z-30">
        <span className="text-lg text-amber-50 drop-shadow-md">1</span>
      </div>

      <div className="relative z-10 mt-8 text-center">
        <h2 className="tracking-tight ">About</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Passionate frontend developer specializing in modern web technologies.
          With 1+ years of experience creating responsive, user-friendly
          interfaces and interactive web applications using React, Next.js, and
          TypeScript.
        </p>
      </div>
    </section>
  );
};
