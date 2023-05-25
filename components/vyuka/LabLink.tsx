import Lab, { LabProps } from "@/components/vyuka/Lab";
import Link from "next/link";

export default function LabLink(lab: JSX.Element) {
  const props: LabProps = lab.props;
  const [day, month] = Lab.splitDate(props.date);

  let className = "me-2";
  if (props.future || props.plan)
    className += " text-muted";

  return <Link key={props.order} href={`#${props.date}`} scroll={false} className={className}>
    {day}. {month}. ({props.order})
  </Link>;
}