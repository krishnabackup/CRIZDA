import Container from "@/components/Container";
import Hero from "@/components/home/Hero";
import MostSoldItems from "@/components/home/MostUsedItems";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/NavBar";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HomePage() {
  return (
    <>
     <Navbar/>
       <Hero/>
      <section className="pb-24">
        <MostSoldItems/>
        <Container>
          <SectionHeading
            title="What is CRIZDA."
            description="At Crisda, we believe everyday life becomes a little more special with the right little things. We bring together a curated collection of unique, aesthetic, colorful, and playful objects designed to add personality to your space and joy to your everyday moments.

Whether it’s something you’ve been looking for, something that solves a small need, or simply something that catches your eye and makes you smile Crisda is here to help you discover it. Because sometimes, you don’t need something big to make life feel better. You just need the right little thing.
"
          />
        </Container>
      </section>
       <section>
        <Container>
          <SectionHeading
            title="What is CRIZDA."
            description="At Crisda, we believe everyday life becomes a little more special with the right little things. We bring together a curated collection of unique, aesthetic, colorful, and playful objects designed to add personality to your space and joy to your everyday moments.

Whether it’s something you’ve been looking for, something that solves a small need, or simply something that catches your eye and makes you smile Crisda is here to help you discover it. Because sometimes, you don’t need something big to make life feel better. You just need the right little thing.
"
          />
        </Container>
        </section>
      <Footer/>
    </>
  );
}
