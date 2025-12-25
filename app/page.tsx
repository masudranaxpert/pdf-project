import Hero from "@/components/hero";
import ToolsGrid from "@/components/tools-grid";
import StepByStep from "@/components/step-by-step";

/**
 * Home page displaying hero, tools grid, and step-by-step guide
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ToolsGrid />
      <StepByStep />
    </>
  );
}
