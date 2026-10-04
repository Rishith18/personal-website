import fs from "node:fs";
import path from "node:path";
import { projects } from "@/data/site";
import Nav from "@/components/Nav";
import IntroLoader from "@/components/IntroLoader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "webp"];

// Pick up screenshots dropped into /public/projects/<slug>.<ext> automatically.
function withScreenshots() {
  return projects.map((project) => {
    if (project.image) return project;
    const dir = path.join(process.cwd(), "public", "projects");
    const ext = IMAGE_EXTENSIONS.find((e) => fs.existsSync(path.join(dir, `${project.slug}.${e}`)));
    return ext ? { ...project, image: `/projects/${project.slug}.${ext}` } : project;
  });
}

export default function Home() {
  return (
    <>
      <IntroLoader />
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects projects={withScreenshots()} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
