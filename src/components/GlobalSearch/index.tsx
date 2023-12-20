import styled, { css } from 'styled-components';
import type { FC, ReactNode } from 'react';
import { useEffect, useRef, useState, Children } from 'react';
import type { MenuItemProps, MenuModelItemProps } from '#src/components/Menu/MenuItem';
import type { ComponentDimension, ExtraProps } from '#src/components/input/types';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { typography } from '#src/components/Typography';
import { InputBorderedDiv } from '#src/components/input/TextInput';
import type { DropContainerStyles } from '#src/components/DropdownContainer';
import { DropdownContainer } from '#src/components/DropdownContainer';
import { Spinner } from '#src/components/Spinner';
import { ReactComponent as SearchOutline } from '@admiral-ds/icons/build/system/SearchOutline.svg';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { InputIconButton } from '#src/components/InputIconButton';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { Menu } from '#src/components/Menu';
import type { RenderPropsType } from '#src/components/input/InputEx/SuffixSelect';
import { SuffixSelect } from '#src/components/input/InputEx/SuffixSelect';
import { refSetter } from '#src/components/common/utils/refSetter';
import type { RenderProps } from '#src/components/input/InputEx';

const iconSizeValue = (props: { $dimension?: ComponentDimension }) => {
  switch (props.$dimension) {
    case 'xl':
      return 24;
    case 's':
      return 20;
    default:
      return 24;
  }
};

const Drop = styled(DropdownContainer)`
  padding: 8px 0px;
  ${(p) => p.theme.shadow['Shadow 08']}
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
`;

const IconPanel = styled.div<{ disabled?: boolean; $dimension?: ComponentDimension }>`
  flex: 0 0 auto;
  gap: 8px;
  display: flex;
  align-items: center;

  & > svg {
    border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
    display: block;
    width: ${iconSizeValue}px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
    }
  }
`;

const Container = styled.div`
  min-width: 280px;
  display: inline-flex;
  gap: 8px;
  align-items: stretch;
  flex: 1 0 0;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  border: 2px solid ${(props) => props.theme.color['Primary/Primary 60 Main']};
  background: ${(props) => props.theme.color['Neutral/Neutral 00']};

  height: 40px;
  padding-left: 16px;
  ${typography['Button/Button 1']}

  &[data-dimension='xl'] {
    height: 56px;
  }

  &[data-dimension='s'] {
    height: 32px;
    padding-left: 12px;
    ${typography['Button/Button 2']}
  }
`;

const ieFixes = css`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`;

const Input = styled.input<ExtraProps>`
  outline: none;
  appearance: none;
  border-radius: inherit;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0;

  color: ${(props) => props.theme.color['Neutral/Neutral 90']};

  &&&:disabled {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  &::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }

  &:disabled::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  &&&:invalid + ${InputBorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  &&&:invalid:hover:not(:disabled) + ${InputBorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 70']};
  }

  &&&:invalid:focus:not(:disabled) + ${InputBorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  ${ieFixes}
`;

const PrefixContainer = styled.div<{ disabled?: boolean; $dimension?: ComponentDimension }>`
  align-self: center;
  border-right: solid 1px ${(props) => props.theme.color['Neutral/Neutral 20']};
  padding-right: 8px;
  margin-right: 8px;
  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])};
  color: ${(props) =>
    props.disabled ? props.theme.color['Neutral/Neutral 30'] : props.theme.color['Neutral/Neutral 50']};
  white-space: nowrap;
`;

const SubmitButton = styled.div`
  display: flex;
  user-select: none;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  background: ${(props) => props.theme.color['Primary/Primary 60 Main']};

  color: ${(props) => props.theme.color['Special/Static White']};
  &&& *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Special/Static White']};
  }

  &:hover {
    cursor: pointer;
  }

  padding: 8px 16px;

  & > svg {
    width: 24px;
    height: 24px;
  }

  [data-dimension='xl'] & {
    padding: 16px 24px;
    & > svg {
      width: 24px;
      height: 24px;
    }
  }

  [data-dimension='s'] & {
    padding: 6px 12px;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export interface GlobalSearchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /** Вызывается при изменении значения в поле ввода */
  onChange: (newValue: string) => void;

  /** Модель данных, с рендер-пропсами*/
  model: Array<MenuModelItemProps>;

  /** Отображать иконку очистки поля */
  displayClearIcon?: boolean;

  /** Отображать статус загрузки данных */
  isLoading?: boolean;

  /** Пропсы для кнопки поиска*/
  submitButtonProps?: React.HTMLAttributes<HTMLDivElement>;

  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ComponentDimension;

  /** Значение префикса */
  prefixValue?: ReactNode;

  /** Список значений префикса */
  prefixValueList?: ReactNode[];

  /** Срабатывает при выборе нового значения префикса*/
  onPrefixValueChange?: (value: ReactNode) => void;

  /** Специальный метод для рендера компонента по значению префикса */
  renderPrefixValue?: (props: RenderProps) => React.ReactNode;

  /** Специальный метод для рендера опции списка префикса по значению */
  renderPrefixOption?: (props: RenderPropsType<ReactNode> & MenuItemProps) => React.ReactNode;

  /** Иконки для отображения в правом углу поля */
  icons?: React.ReactNode;

  // TODO: провести рефактор параметра в рамках задачи https://github.com/AdmiralDS/react-ui/issues/1083
  /** Ref контейнера, относительно которого нужно выравнивать дроп контейнеры,
   * если не указан, выравнивание произойдет относительно контейнера компонента
   */
  alignDropRef?: React.RefObject<HTMLElement>;

  /** Позволяет добавлять стили и className для выпадающего меню кнопки */
  prefixDropContainerStyle?: DropContainerStyles;
}

export const GlobalSearch: FC<GlobalSearchProps> = ({
  dimension,
  alignDropRef,
  placeholder,
  id,
  value,
  defaultValue,
  onChange,
  submitButtonProps = {},
  icons,
  displayClearIcon,
  isLoading,
  model,

  prefixValue,
  renderPrefixValue = ({ value }) => (!value ? value : String(value)),
  prefixValueList,
  onPrefixValueChange,
  renderPrefixOption,
  prefixDropContainerStyle,
  ...props
}) => {
  const [needSubmit, setNeedSubmit] = useState(0);
  const [tempValue, setTempValue] = useState<string>('');
  const [displayOptionsVisible, setDisplayOptionsVisible] = useState<boolean>(false);
  const [inFocus, setInFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const submitButtonRef = useRef<HTMLDivElement>(null);
  const inputProps = { placeholder, id, value, defaultValue, onChange };
  useEffect(() => {
    if (inFocus) {
      const listener = (event: KeyboardEvent) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
          event.preventDefault();
          event.stopPropagation();
          if (submitButtonRef.current) {
            submitButtonRef.current.click();
          }
        }
        if (event.code === 'ArrowDown') {
          if (!displayOptionsVisible) {
            setDisplayOptionsVisible(true);
          }
        }
      };
      document.addEventListener('keydown', listener);
      return () => {
        document.removeEventListener('keydown', listener);
      };
    }
  }, [inFocus, displayOptionsVisible, tempValue, model]);
  const iconArray = Children.toArray(icons);

  if (displayClearIcon && !!value) {
    iconArray.unshift(
      <InputIconButton
        icon={CloseOutlineSvg}
        key="clear-icon"
        onMouseDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
          const inputEl = inputRef.current;
          if (inputEl) {
            changeInputData(inputEl, { value: '' });
          }
        }}
        aria-hidden
      />,
    );
  }

  if (isLoading) {
    iconArray.unshift(<Spinner key="loading-icon" dimension={dimension === 's' ? 'ms' : 'm'} />);
  }

  const iconCount = iconArray.length;

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayOptionsVisible(true);
    setTempValue('');
    inputProps.onChange?.(e.target.value);
  };

  const handleMenuSelectItem = (id: string) => {
    setTempValue('');
    setNeedSubmit((val) => val + 1);
    inputProps.onChange?.(id);
  };

  const handleMenuActivateItem = (id?: string) => {
    setTempValue(id ?? '');
  };

  const handleMenuMouseLeave = () => {
    setTempValue('');
  };

  useEffect(() => {
    if (needSubmit > 0 && submitButtonRef.current) {
      submitButtonRef.current.click();
    }
  }, [needSubmit]);

  const innerContainerRef = useRef<HTMLDivElement | null>(null);
  const alignRef = alignDropRef || innerContainerRef;
  const menuDimension = dimension === 'xl' ? 'l' : dimension;
  const renderPrefix = prefixValueList
    ? (props: RenderProps) => (
        <SuffixSelect
          dropAlign="flex-start"
          dimension={menuDimension}
          alignRef={alignRef}
          value={props.value || ''}
          onChange={(value) => onPrefixValueChange?.(value)}
          options={prefixValueList}
          disabled={props.disabled}
          readOnly={props.readOnly}
          dropContainerCssMixin={prefixDropContainerStyle?.dropContainerCssMixin}
          dropContainerClassName={prefixDropContainerStyle?.dropContainerClassName}
          dropContainerStyle={prefixDropContainerStyle?.dropContainerStyle}
          renderValue={renderPrefixValue}
          renderOption={renderPrefixOption}
        />
      )
    : renderPrefixValue;

  const prefix = renderPrefix({ value: prefixValue, disabled: props.disabled, readOnly: props.readOnly });

  return (
    <Container
      data-dimension={dimension}
      {...props}
      ref={refSetter(innerContainerRef, containerRef)}
      onFocus={() => setInFocus(true)}
      onBlur={() => {
        setInFocus(false);
        setDisplayOptionsVisible(false);
        setTempValue('');
      }}
    >
      {!!prefix && (
        <PrefixContainer $dimension={dimension} disabled={props.disabled}>
          {prefix}
        </PrefixContainer>
      )}
      <Input
        {...inputProps}
        value={tempValue === '' ? inputProps.value : tempValue}
        onChange={handleInputOnChange}
        ref={inputRef}
      />
      {iconCount > 0 ? (
        <IconPanel disabled={props.disabled} $dimension={dimension}>
          {iconArray}
        </IconPanel>
      ) : null}
      <SubmitButton
        {...submitButtonProps}
        children={submitButtonProps.children ?? <SearchOutline />}
        onClick={(e) => {
          submitButtonProps.onClick?.(e);
          setDisplayOptionsVisible(false);
        }}
        ref={submitButtonRef}
      />
      {displayOptionsVisible && (
        <Drop alignSelf="stretch" targetRef={containerRef}>
          <Menu
            dimension={dimension === 'xl' ? 'l' : dimension}
            maxHeight="496px"
            rowCount={10}
            model={model}
            onSelectItem={handleMenuSelectItem}
            active={tempValue}
            onActivateItem={handleMenuActivateItem}
            onMouseLeave={handleMenuMouseLeave}
            defaultIsActive
            disableSelectedOptionHighlight
            preventFocusSteal
          />
        </Drop>
      )}
    </Container>
  );
};
