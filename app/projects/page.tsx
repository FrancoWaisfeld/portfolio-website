import Project from "@/components/Project/Project";
import ContactSection from "@/components/ContactSection/ContactSection";
import Reveler from "@/public/reveler.png";

const Projects = () => {
  return (
    <main>
      <Project
        image={Reveler}
        name="Reveler"
        description="a ticket marketplace for nightlife venues"
        bulletPoints={[
          "Developed a distributed state syncing system that resulted in shared state between up to ~50 clients through Web-socket Connections. (React, Node.js)",
          "Implemented optimistic UI updates for the syncing system that led to 0 ms of perceived latency for client updates. (React, Node.js)",
          "Engineered delta updates and batching that reduced web-socket message size by ~95%+. (React, Node.js)",
          "Architected and developed a backend of edge workers to support concurrent WebSocket connections and long-term persistent state storage (Cloudflare, Node.js, WebSockets)",
          "Worked with a remote team of 4 engineers using agile methodology resulting in building a working framework within 4 months. (Git, GitHub)",
        ]}
        date="Aug 2022 to Sep 2023"
        role="Full Stack Engineer"
        skills={["Next.js", "TypeScript", "real-time", "customer analysis"]}
        tag="Startup Job"
      />
      <ContactSection />
    </main>
  );
};

export default Projects;
