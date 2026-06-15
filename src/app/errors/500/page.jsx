import ErrorPage from "@/components/ErrorPage";

export const metadata = {
  title: "Internal Server Error | Health Shield",
  description: "Something went wrong on our end.",
};

export default function InternalServerErrorPage() {
  return <ErrorPage statusCode={500} />;
}
