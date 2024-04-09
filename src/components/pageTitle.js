export default function Title({ pageName }) {
  return (
    <section
      id="breadcrumb"
      className="bg-[url('/images/blue-animations.gif')]"
    >
      <div className="w-full h-full bg-primary/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-24 pb-12">
            <h1 className="h2 mt-6 text-center text-white">{pageName}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
