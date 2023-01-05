import { GlobalState, QuickButtonTypes } from '@/types/StoreTypes';
import { AnyFunction } from '@/utils/types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

type Props = {
  onQuickButtonClicked?: AnyFunction;
}

function QuickButtons({ onQuickButtonClicked }: Props) {
  const buttons = useSelector((state: GlobalState) => state.quickButton.quickButtons);

  const getComponentToRender = (button: QuickButtonTypes) => {
    const ComponentToRender = button.component;
    return (
      <ComponentToRender
        onQuickButtonClicked={onQuickButtonClicked}
        button={button}
      />
    );
  }

  if (!buttons?.length) return null;

  return (
    <div className="quick-buttons-container">
      <ul className="quick-buttons">
        {buttons.map((button, index) =>
          <li className="quick-list-button" key={`${button.label}-${index}`}>
            {getComponentToRender(button)}
          </li>
          )
        }
      </ul>
    </div>
  );
}

export default QuickButtons;
