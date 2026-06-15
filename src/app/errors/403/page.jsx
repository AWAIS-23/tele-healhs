import ErrorPage from "@/components/ErrorPage";

export const metadata = {
  title: "Forbidden | Health Shield",
  description: "You don't have permission to access this resource.",
};

export default function ForbiddenPage() {
  return <ErrorPage statusCode={403} />;
}
