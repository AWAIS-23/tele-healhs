import ErrorPage from "@/components/ErrorPage";

export const metadata = {
  title: "Unauthorized | Health Shield",
  description: "You need to be logged in to access this resource.",
};

export default function UnauthorizedPage() {
  return <ErrorPage statusCode={401} />;
}
