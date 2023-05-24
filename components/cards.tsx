import Card from "react-bootstrap/Card";
import { ReactNode } from "react";

export function CardBorderPrimary({ children }: { children: ReactNode }) {
  return (
    <Card border="primary" className="mb-3">
      <Card.Body>
        <Card.Text>{children}</Card.Text>
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