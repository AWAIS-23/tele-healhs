import ErrorPage from "@/components/ErrorPage";

export const metadata = {
  title: "Service Unavailable | Health Shield",
  description: "Our service is temporarily unavailable for maintenance.",
};

export default function ServiceUnavailablePage() {
  return <ErrorPage statusCode={503} />;
}
