import { PropsWithChildren, useState } from "react";
import { Collapse } from "react-bootstrap";

export type LabProps = {
  order: string;
  date: string;
  title?: string;
  plan?: boolean,
  future?: boolean,
};

function Lab({ date, order, title = "", plan = false, future = false, children }: PropsWithChildren<LabProps>) {
  const [open, setOpen] = useState(true);
  const [day, month] = Lab.splitDate(date);
  const id = Lab.id(day, month);

  if (future) return <></>;

  return (
    <section id={date} className="co-bylo">
      <a className="toggle" onClick={() => setOpen(!open)} aria-controls={id} aria-expanded={open}>
        <h3 className="ms-1">
          {day}. {month}. ({order}. cvičení) {title}
        </h3>
      </a>
      <Collapse in={open}>
        <div className={"cviko " + (plan ? "plan text-muted" : "")} id={id}>
          {children}
        </div>
      </Collapse>
    </section>
  );
}
Lab.splitDate = (date: string) => date.split(".").slice(0, 2);
Lab.id = (day: string, month: string) => `cviko-${month}-${day}`;

export default Lab;