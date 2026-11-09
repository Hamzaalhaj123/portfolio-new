import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n.ts");

const nextConfig: NextConfig = {
  // A server-sent filename beats the link's download attribute, so name it here.
  async headers() {
    return [
      {
        source: "/cv.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Hamza Alhaj CV.pdf"',
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
