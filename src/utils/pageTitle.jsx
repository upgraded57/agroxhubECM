import { Helmet } from "react-helmet-async";

export default function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{title ? title : "Agroxhub"}</title>
    </Helmet>
  );
}
