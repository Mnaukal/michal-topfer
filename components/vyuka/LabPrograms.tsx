import { useRouter } from "next/router";

export type ProgramsProps = {
  order: string;
  afs?: boolean;
};

export default function LabPrograms({ order, afs = false }: ProgramsProps) {
  const router = useRouter();
  const url = afs
    ? "https://www.ms.mff.cuni.cz/~topfermi/vyuka/materialy/"
    : router.pathname.replace("vyuka", "programy");

  return <a href={`${url}/${order.padStart(2, '0')}`}>programy ze cvičení</a>;
}
