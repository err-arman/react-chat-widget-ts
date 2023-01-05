import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import Badge from './components/Badge';

import './style.scss';
import { GlobalState } from '@/types/StoreTypes';
import { setBadgeCount } from 'redux/slices/messagesSlice';

import openLauncher from '@/assets/launcher_button.svg'
import close from '@/assets/clear-button.svg'

type Props = {
  toggle: () => void;
  chatId: string;
  openLabel: string;
  closeLabel: string;
  closeImg: string;
  openImg: string;
  showBadge?: boolean;
}

function Launcher({ toggle, chatId, openImg, closeImg, openLabel, closeLabel, showBadge }: Props) {
  const dispatch = useDispatch();
  const { showChat, badgeCount } = useSelector((state: GlobalState) => ({
    showChat: state.behavior.showChat,
    badgeCount: state.messages.badgeCount
  }));

  const toggleChat = () => {
    toggle();
    if (!showChat) dispatch(setBadgeCount(0));
  }

  return (
    <button type="button" className={cn('rcw-launcher', { 'rcw-hide-sm': showChat })} onClick={toggleChat} aria-controls={chatId}>
      {!showChat && showBadge && <Badge badge={badgeCount} />}
      {showChat ?
        <img src={closeImg || close} className="rcw-close-launcher" alt={openLabel} /> :
        <img src={openImg || openLauncher} className="rcw-open-launcher" alt={closeLabel} />
      }
    </button>
  );
}

export default Launcher;
