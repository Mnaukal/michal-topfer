import { useRouter } from "next/router";

export type ProgramsProps = {
  order: string;
};

export default function LabPrograms({ order }: ProgramsProps) {
  const router = useRouter();
  const url = router.pathname.replace("vyuka", "programy");

  return <a href={`${url}/${order.padStart(2, '0')}`}>programy ze cvičení</a>;
}
