import fs from "node:fs";
import path from "node:path";
import { projects } from "@/data/site";
import Nav from "@/components/Nav";
import IntroLoader from "@/components/IntroLoader";
import Hero from "@/components/sections/Hero";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "webp"];

// Pick up screenshots (<slug>.png/jpg/...) and clips (<slug>.mp4) dropped into
// /public/projects automatically. With a clip, the image is used as its poster frame.
function withScreenshots() {
  const dir = path.join(process.cwd(), "public", "projects");
  const exists = (file: string) => fs.existsSync(path.join(dir, file));
  return projects.map((project) => {
    const ext = IMAGE_EXTENSIONS.find((e) => exists(`${project.slug}.${e}`));
    return {
      ...project,
      image: project.image ?? (ext ? `/projects/${project.slug}.${ext}` : undefined),
      video: project.video ?? (exists(`${project.slug}.mp4`) ? `/projects/${project.slug}.mp4` : undefined),
    };
  });
}

export default function Home() {
  return (
    <>
      <IntroLoader />
      <Nav />
      <main>
        <Hero />
        <Projects projects={withScreenshots()} />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
