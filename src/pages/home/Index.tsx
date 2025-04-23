import { ReactNode, Suspense } from "react";
import Loader from "../../components/loader/Loader";

export default function Index({ children }: { children: ReactNode }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
