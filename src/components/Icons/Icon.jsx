import Tag from './assets/tag';
import User from './assets/user';
import Card from './assets/card';
import Send from './assets/send';
import Folder from './assets/folder';
import Wallet from './assets/wallet';
import Quotes from './assets/quotes';
import Vector from './assets/vector';
import Support from './assets/support';
import Balance from './assets/balance';
import Settings from './assets/settings';
import Shipment from './assets/shipment';
import Bookings from './assets/bookings';
import ArrowRight from './assets/arrowRight';
import Notification from './assets/notification';

export const Icon = ({ name, ...props }) => {
  switch (name) {
    case 'vector': {
      return <Vector {...props} />;
    }
    case 'booking': {
      return <Bookings {...props} />;
    }
    case 'tag': {
      return <Tag {...props} />;
    }
    case 'user': {
      return <User {...props} />;
    }
    case 'folder': {
      return <Folder {...props} />;
    }
    case 'send': {
      return <Send {...props} />;
    }
    case 'support': {
      return <Support {...props} />;
    }
    case 'balance': {
      return <Balance {...props} />;
    }
    case 'wallet': {
      return <Wallet {...props} />;
    }
    case 'settings': {
      return <Settings {...props} />;
    }
    case 'card': {
      return <Card {...props} />;
    }
    case 'arrow-right': {
      return <ArrowRight {...props} />;
    }
    case 'notification': {
      return <Notification {...props} />;
    }
    case 'shipment': {
      return <Shipment {...props} />;
    }
    case 'quotes': {
      return <Quotes {...props} />;
    }

    default:
      return null;
  }
};
