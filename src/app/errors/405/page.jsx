import ErrorPage from "@/components/ErrorPage";

export const metadata = {
  title: "Method Not Allowed | Tele Health",
  description: "The HTTP method used is not supported for this resource.",
};

export default function MethodNotAllowedPage() {
  return <ErrorPage statusCode={405} />;
}
