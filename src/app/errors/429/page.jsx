import ErrorPage from "@/components/ErrorPage";

export const metadata = {
  title: "Too Many Requests | Tele Health",
  description: "You've made too many requests. Please try again later.",
};

export default function TooManyRequestsPage() {
  return <ErrorPage statusCode={429} />;
}
