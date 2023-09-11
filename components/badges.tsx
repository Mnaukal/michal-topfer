import BBadge from 'react-bootstrap/Badge';

export enum BadgeType {
    Paper, Game, Web
}

export function Badge({ type }: { type: BadgeType }) {
    switch (type) {
        case BadgeType.Paper:
            return <BBadge pill bg="info" className='me-1'>Paper</BBadge>;
        case BadgeType.Game:
            return <BBadge pill bg="success" className='me-1'>Hra</BBadge>;;
        case BadgeType.Web:
            return <BBadge pill bg="warning" className='me-1'>Web</BBadge>;;
  }
}
