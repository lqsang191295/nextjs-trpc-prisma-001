"use client";

import Provider from "./Provider";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>{" "}
      </body>
    </html>
  );
};

export default Layout;
