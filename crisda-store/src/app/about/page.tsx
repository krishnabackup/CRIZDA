import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Navbar from "@/components/layout/NavBar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="flex min-h-[70vh] items-center justify-center px-6 text-center">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-(--color-muted)">
              About Crisda
            </p>

            <h1 className="mt-6 text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
              Little things.
              <br />
              Better spaces.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-(--color-muted) md:text-lg">
              We believe the right little thing can make an ordinary
              space feel a little more personal, beautiful, and yours.
            </p>
          </div>
        </section>

        <Container>
          {/* =====================================================
              OUR STORY
          ====================================================== */}
          <section className="grid grid-cols-1 gap-10 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-(--color-muted)">
                Our story
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-medium tracking-tight md:text-4xl">
                Made for the little moments.
              </h2>
            </div>

            <div className="max-w-2xl space-y-5 text-base leading-7 text-(--color-muted)">
              <p>
                At Crisda, we believe you don't always need something
                big to change how a space feels.
              </p>

              <p>
                Sometimes it's a warm lamp on your desk, a little object
                beside your books, a beautiful tray on your bedside
                table, or something completely unexpected that simply
                makes you smile.
              </p>

              <p>
                Crisda brings together those little discoveries —
                unique, aesthetic, colorful, playful, and thoughtfully
                chosen for everyday spaces.
              </p>

              <p>
                We want shopping to feel less like searching through
                endless products and more like discovering something
                you didn't know you were looking for.
              </p>
            </div>
          </section>

          {/* =====================================================
              VALUES
          ====================================================== */}
          <section className="rounded-[2rem] bg-(--color-surface) px-6 py-16 md:px-10 md:py-20">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-(--color-muted)">
                What we believe
              </p>

              <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                Small choices make a space yours.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
              {/* VALUE 1 */}
              <div>
                <span className="text-sm text-(--color-muted)">
                  01
                </span>

                <h3 className="mt-5 text-lg font-medium">
                  Find something different
                </h3>

                <p className="mt-3 text-sm leading-6 text-(--color-muted)">
                  We look beyond ordinary products to find objects
                  with character, personality, and a little surprise.
                </p>
              </div>

              {/* VALUE 2 */}
              <div>
                <span className="text-sm text-(--color-muted)">
                  02
                </span>

                <h3 className="mt-5 text-lg font-medium">
                  Make everyday spaces better
                </h3>

                <p className="mt-3 text-sm leading-6 text-(--color-muted)">
                  From desks to bedrooms, we choose things that make
                  the places around you feel more enjoyable.
                </p>
              </div>

              {/* VALUE 3 */}
              <div>
                <span className="text-sm text-(--color-muted)">
                  03
                </span>

                <h3 className="mt-5 text-lg font-medium">
                  Buy what makes you smile
                </h3>

                <p className="mt-3 text-sm leading-6 text-(--color-muted)">
                  Not everything needs a practical reason. Sometimes
                  liking something is reason enough.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.4fr_0.8fr]">
              {/* LARGE IMAGE */}
              <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-(--color-surface)">
                <Image
                  src="/about/crisda-space-1.webp"
                  alt="Crisda products arranged in a cozy space"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>

              <div className="grid gap-4">
                <div className="relative aspect-square overflow-hidden rounded-4xl bg-(--color-surface)">
                  <Image
                    src="/about/crisda-space-2.webp"
                    alt="Crisda decorative objects"
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 35vw"
                  />
                </div>

                <div className="flex min-h-56 items-center rounded-4xl bg-(--color-surface) p-8 md:p-10">
                  <p className="text-2xl font-medium leading-tight md:text-3xl">
                    Your space doesn't have to look like everyone
                    else's.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-10 py-16 md:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-(--color-muted)">
                The Crisda way
              </p>

              <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
                Curated,
                <br />
                not crowded.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-(--color-muted) md:text-xl">
                There are endless things you can buy online.
                We don't want to add more noise. We want to help
                you discover the things actually worth bringing
                into your space.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-medium">
                    Thoughtfully chosen
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-(--color-muted)">
                    Products selected for their design, character,
                    usefulness, or simply the joy they bring.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">
                    Made for everyday life
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-(--color-muted)">
                    Beautiful objects should still fit naturally
                    into the spaces where life actually happens.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">
                    Something for every corner
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-(--color-muted)">
                    From your desk and office to your bedroom and
                    cozy corners.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">
                    A little unexpected
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-(--color-muted)">
                    Because discovering something you weren't
                    looking for can sometimes be the best part.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-black/10 py-12 md:py-16">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-(--color-muted) md:gap-x-12">
              <span>Home</span>
              <span>Desk</span>
              <span>Office</span>
              <span>Bedroom</span>
              <span>Cozy Corner</span>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="rounded-4xl bg-(--color-surface) px-6 py-20 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-(--color-muted)">
                Ready to explore?
              </p>

              <h2 className="mt-4  text-4xl font-medium leading-tight tracking-tight md:text-6xl">
                Find a little something for your space.
              </h2>

              <p className="mx-auto mt-6 max-w-lg text-sm leading-6 text-(--color-muted)">
                Discover objects that add personality, warmth,
                and a little joy to your everyday surroundings.
              </p>

              <Link
                href="/products"
                className="mt-8 inline-flex rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90 active:scale-[0.98]"
              >
                Explore the collection
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}