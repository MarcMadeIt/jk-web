import { Metadata } from "next";
import InfoPage from "./InfoPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Arzonic – a modern web agency focused on tailored digital solutions, 3D, and user experience.",
};

export default function Page() {
  return <InfoPage />;
}
