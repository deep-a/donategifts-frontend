import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHandshake,
  faBan,
  faCheckSquare,
  faEnvelope,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';

export function applyIcons() {
  library.add(faHandshake, faBan, faCheckSquare, faEnvelope, faExclamationTriangle);
}

export function prepareIconName(icon) {
  return icon
    .slice(2)
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}
