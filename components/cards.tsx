import Card from "react-bootstrap/Card";
import { ReactNode } from "react";
import { Color } from "react-bootstrap/esm/types";

type CardBorderPropsType = {
  children: ReactNode,
  cardText?: boolean,
  borderColor?: Color,
  textColor?: Color,
}

function CardBorder({ children, textColor = undefined, borderColor = undefined, cardText = true }: CardBorderPropsType) {
  return (
    <Card border={borderColor} text={textColor} className="mb-3">
      <Card.Body>
        {cardText ? <Card.Text>{children}</Card.Text> : children}
      </Card.Body>
    </Card>
  );
}


export function CardBorderPrimary(props: CardBorderPropsType) {
  return <CardBorder borderColor="primary" {...props} />
}


export function CardBorderDanger({ textColor = "danger", ...props }: CardBorderPropsType) {
  return <CardBorder borderColor="danger" textColor={textColor} {...props} />
}

export function CardBorderWarning({ textColor = "warning", ...props }: CardBorderPropsType) {
  return <CardBorder borderColor="warning" textColor={textColor} {...props} />
}

export function CardDark({ children }: { children: ReactNode }) {
  return (
    <Card bg="dark" text="white" className="mb-3">
      <Card.Body>
        <Card.Text>{children}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export function CardWarning({ children }: { children: ReactNode }) {
  return (
    <Card bg="warning" className="mb-3">
      <Card.Header className="text-primary">VAROVÁNÍ</Card.Header>
      <Card.Body className="text-primary pb-0">
        {children}
      </Card.Body>
    </Card>
  );
}