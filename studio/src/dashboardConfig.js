export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "630c02252de66e2da4e74c59",
                  title: "Sanity Studio",
                  name: "casa-de-mujeres-y-diversidades-daiana-colque-studio",
                  apiId: "3620b8f9-5e35-4a1c-b1c8-00d11755cf3f",
                },
                {
                  buildHookId: "630c0225fbefa92997c70f92",
                  title: "Blog Website",
                  name: "casa-de-mujeres-y-diversidades-daiana-colque",
                  apiId: "32471d74-1f79-473f-8f19-40cf41829623",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/fedeSantana/Casa-de-mujeres-y-diversidades-Daiana-Colque",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://casa-de-mujeres-y-diversidades-daiana-colque.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
