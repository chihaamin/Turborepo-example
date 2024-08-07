import { AuthLayoutWrapper } from "@repo/ui";
import "@repo/ui/styles.css";

export default function RootLayout({
  children,
}) {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
}
