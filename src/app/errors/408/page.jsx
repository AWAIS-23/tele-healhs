import ErrorPage from "@/components/ErrorPage";

export const metadata = {
  title: "Request Timeout | Health Shield",
  description: "Your request took too long to complete.",
};

export default function RequestTimeoutPage() {
  return <ErrorPage statusCode={408} />;
}
