import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const discoverProgramSidebar: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },
    {
      type: "doc",
      id: "getting-started",
      label: "Getting Started",
    },
    {
      type: "category",
      label: "Frontend",
      items: [
        {
          type: "doc",
          id: "frontend/project-structure",
          label: "Project Structure",
        },
        // {
        //   type: "doc",
        //   id: "frontend/development",
        //   label: "Development Guide",
        // },
        // {
        //   type: "doc",
        //   id: "frontend/deployment",
        //   label: "Deployment",
        // },
        {
          type: "doc",
          id: "frontend/website-layout",
          label: "Website Layout",
        },
      ],
    },
    {
      type: "category",
      label: "Backend",
      items: [
        {
          type: "doc",
          id: "backend/project-structure",
          label: "Project Structure",
        },
        {
          type: "doc",
          id: "backend/authentication",
          label: "Authentication",
        },
        {
          type: "doc",
          id: "backend/development",
          label: "Development Guide",
        },
        {
          type: "doc",
          id: "backend/deployment",
          label: "Deployment",
        },
      ],
    },
    // {
    //   type: "category",
    //   label: "Client Handoff Guide",
    //   items: [
    //     {
    //       type: "doc",
    //       id: "client-handoff/intro",
    //       label: "Introduction",
    //     },
    //     {
    //       type: "doc",
    //       id: "client-handoff/requirements",
    //       label: "Handoff Requirements",
    //     },
    //     {
    //       type: "doc",
    //       id: "client-handoff/sample-email",
    //       label: "Sample Handoff Email",
    //     },
    //   ],
    // },
  ],
};

export default discoverProgramSidebar;
