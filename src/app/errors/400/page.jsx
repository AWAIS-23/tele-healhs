import ErrorPage from "@/components/ErrorPage";

export const metadata = {
  title: "Bad Request | Tele Health",
  description: "The request was invalid or malformed.",
};

export default function BadRequestPage() {
  return <ErrorPage statusCode={400} />;
}
