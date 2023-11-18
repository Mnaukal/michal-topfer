import Card from "react-bootstrap/Card";
import { ReactNode } from "react";

export function CardBorderPrimary({ children, cardText = true }: { children: ReactNode, cardText?: boolean }) {
  return (
    <Card border="primary" className="mb-3">
      <Card.Body>
        {cardText ? <Card.Text>{children}</Card.Text> : children}
      </Card.Body>
    </Card>
  );
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

export function CardBorderDanger({ children }: { children: ReactNode }) {
  return (
    <Card border="danger" className="mb-3">
      <Card.Body>
        <Card.Text className="text-danger">{children}</Card.Text>
      </Card.Body>
    </Card>
  );
}