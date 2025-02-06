import type { PropsWithChildren, RefObject } from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';

import { mediumGroupBorderRadius } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import { Link } from '#src/components/Link';
import type { NotificationProps, NotificationStatus } from '#src/components/Notification';
import type { NotificationItemStatus } from '#src/components/NotificationItem';
import {
  StyledNotificationItem,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
} from '#src/components/NotificationItem';

const StyledLink = styled(Link)`
  ${typography['Button/Button 2']}
`;

/** Данный шаблон предназначен для перехода на новую модель c Notification на
 * NotificationItem в ToastProvider.
 * Рекомендуется в дальнейшем использовать новый вариант NotificationItem
 * с полностью кастомным наполнением согласно дизайну
 * (пример можно посмотреть в разделе NotificationItem) */
export const DefaultToastItem = ({
  title,
  linkText = '',
  href = '',
  onClose,
  children,
  ...props
}: PropsWithChildren<NotificationProps>) => {
  return (
    <StyledNotificationItem {...props} onClose={onClose}>
      {title && <NotificationItemTitle>{title}</NotificationItemTitle>}
      <NotificationItemContent>{children}</NotificationItemContent>
      {linkText && (
        <NotificationItemButtonPanel>
          <StyledLink href={href}>{linkText || href}</StyledLink>
        </NotificationItemButtonPanel>
      )}
    </StyledNotificationItem>
  );
};

export interface ToastItemWithAutoDeleteProps {
  /** Колбек для удаления уведомления */
  onRemoveNotification: () => void;
  /** Время, после которого уведомление автоматически удалится */
  autoDeleteTime?: number;
}

/** Шаблон для отображения кастомного уведомления с автоматическим удалением
 * через заданное время */
export const ToastItemWithAutoDelete = ({
  children,
  onRemoveNotification,
  autoDeleteTime,
}: PropsWithChildren<ToastItemWithAutoDeleteProps>) => {
  useEffect(() => {
    if (!autoDeleteTime) return;

    const timerId = setTimeout(() => onRemoveNotification(), autoDeleteTime);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return <>{children}</>;
};

const Progress = styled.div.attrs<{ $percent: number }>((props) => ({
  style: { width: `${props.$percent}%` },
}))<{ $percent: number; $status?: NotificationStatus; $duration: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({ theme, $status }) => {
    switch ($status) {
      case 'warning':
        return `var(--admiral-color-Warning_Warning50Main, ${theme.color['Warning/Warning 50 Main']})`;
      case 'error':
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      case 'success':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
      case 'info':
      default:
        return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
    }
  }};
  height: 4px;
  transition: ${({ $duration }) => `all ${$duration}ms linear`};
`;

const usePauseOnHover = (pauseOnHover: boolean, wrapperRef: RefObject<HTMLDivElement>) => {
  const [paused, setPaused] = useState(false);

  const onWrapperEnter = useCallback(() => setPaused(true), []);
  const onWrapperLeave = useCallback(() => setPaused(false), []);

  useEffect(() => {
    if (!pauseOnHover) {
      return;
    }

    const wrapper = wrapperRef.current;

    if (wrapper) {
      wrapper.addEventListener('mouseenter', onWrapperEnter);
      wrapper.addEventListener('mouseleave', onWrapperLeave);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener('mouseenter', onWrapperEnter);
        wrapper.removeEventListener('mouseleave', onWrapperLeave);
      }
    };
  }, [onWrapperLeave, onWrapperEnter, pauseOnHover, wrapperRef]);

  return paused;
};

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
`;

/** Шаблон для отображения кастомного уведомления со шкалой отсчета времени,
 * через которое оно закроется */
export interface ToastItemWithProgressProps {
  /** Колбек для удаления уведомления */
  onRemoveNotification: () => void;
  /** Время, после которого уведомление автоматически удалится */
  autoDeleteTime?: number;
  /** Статус уведомления */
  status?: NotificationItemStatus;
  /** Шаг шкалы отсчета времени */
  progressStep?: number;
  /** При наведении на блок останавливает отсчет времени */
  pauseOnHover?: boolean;
}

export const ToastItemWithProgress = ({
  children,
  status,
  onRemoveNotification,
  autoDeleteTime,
  progressStep = 1,
  pauseOnHover = true,
}: PropsWithChildren<ToastItemWithProgressProps>) => {
  const [progress, setProgress] = useState(100);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const paused = usePauseOnHover(pauseOnHover, wrapperRef);

  const delta = (autoDeleteTime || 0) / (100 * progressStep);

  useEffect(() => {
    if (!autoDeleteTime || paused || progress === 0) {
      return;
    }

    const timerId = setTimeout(() => setProgress((prev) => prev - 1), delta);

    return () => {
      clearTimeout(timerId);
    };
  }, [autoDeleteTime, delta, paused, progress]);

  useEffect(() => {
    if (progress === 0) onRemoveNotification();
  }, [progress, onRemoveNotification]);

  return (
    <Wrapper ref={wrapperRef}>
      {children}
      {progress > 0 && <Progress $percent={progress} $status={status} $duration={delta} />}
    </Wrapper>
  );
};

DefaultToastItem.displayName = 'DefaultToastItem';

ToastItemWithAutoDelete.displayName = 'ToastItemWithAutoDelete';

ToastItemWithProgress.displayName = 'ToastItemWithProgress';
