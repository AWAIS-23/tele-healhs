import ErrorPage from "@/components/ErrorPage";

export const metadata = {
  title: "Bad Gateway | Health Shield",
  description: "Our server is temporarily unavailable.",
};

export default function BadGatewayPage() {
  return <ErrorPage statusCode={502} />;
}
