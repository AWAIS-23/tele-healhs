import ErrorPage from "@/components/ErrorPage";

export const metadata = {
  title: "Internal Server Error | Tele Health",
  description: "Something went wrong on our end.",
};

export default function InternalServerErrorPage() {
  return <ErrorPage statusCode={500} />;
}
