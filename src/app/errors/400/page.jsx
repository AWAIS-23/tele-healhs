import ErrorPage from "@/components/ErrorPage";

export const metadata = {
  title: "Bad Request | Health Shield",
  description: "The request was invalid or malformed.",
};

export default function BadRequestPage() {
  return <ErrorPage statusCode={400} />;
}
