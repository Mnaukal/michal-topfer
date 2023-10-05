import { useRouter } from "next/router";
import Link from "next/link";

export type ProgramsProps = {
  order: string;
  source: "lab" | "web";
};

export default function LabPrograms({ order, source }: ProgramsProps) {
  const router = useRouter();
  const url = source == "lab"
    ? "https://www.ms.mff.cuni.cz/~topfermi/vyuka/materialy"
    : router.pathname.replace("vyuka", "programy");

  return <Link href={`${url}/${order.padStart(2, '0')}`}>programy ze cvičení</Link>;
}
