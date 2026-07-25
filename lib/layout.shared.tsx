import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <span className="font-semibold">Documind</span>
          <span className="text-fd-muted-foreground font-normal"> Docs</span>
        </>
      ),
    },
    links: [
      {
        text: "GitHub (app)",
        url: "https://github.com/",
        active: "none",
      },
    ],
  }
}
