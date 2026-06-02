import ErrorPage from "@/components/ErrorPage";

export const metadata = {
  title: "Forbidden | Tele Health",
  description: "You don't have permission to access this resource.",
};

export default function ForbiddenPage() {
  return <ErrorPage statusCode={403} />;
}
