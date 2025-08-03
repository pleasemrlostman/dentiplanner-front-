import { createRoot } from "react-dom/client";
import "@repo/ui/styles.css";
import "./style.css";
import { Card } from "@repo/ui/card";
// import { Gradient } from "@repo/ui/gradient";
import { TurborepoLogo } from "@repo/ui/turborepo-logo";
import { Title } from "@repo/ui/title";

const LINKS = [
  {
    title: "Docs",
    href: "https://turborepo.com/docs",
    description: "Find in-depth information about Turborepo features and API.",
  },
  {
    title: "Learn",
    href: "https://turborepo.com/docs/handbook",
    description: "Learn more about monorepos with our handbook.",
  },
  {
    title: "Templates",
    href: "https://turborepo.com/docs/getting-started/from-example",
    description: "Choose from over 15 examples and deploy with a single click.",
  },
  {
    title: "Deploy",
    href: "https://vercel.com/new",
    description:
      "Instantly deploy your Turborepo to a shareable URL with Vercel.",
  },
];

const App = () => (
  <main className="flex flex-col items-center justify-between min-h-screen p-24">
    <Title title="Welcome to Clinic Page" />
    <TurborepoLogo />
    <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      {LINKS.map(({ title, href, description }) => (
        <Card href={href} key={title} title={title}>
          {description}
        </Card>
      ))}
    </div>
  </main>
);

createRoot(document.getElementById("app")!).render(<App />);
