import { Suspense } from "react";
import Loader from "../../components/loader/Loader";

export default function Index({ children }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
