import {Layout} from "@repo/ui"
import "@repo/ui/styles.css";

export default function RootLayout({
  children,
}) {
  return <Layout>{children}</Layout>;
}
