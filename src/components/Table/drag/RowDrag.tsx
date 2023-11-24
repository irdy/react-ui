import { useState, useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { DropdownContext } from '#src/components/DropdownProvider';
import observeRect from '#src/components/common/observeRect';
import type { TableProps } from '#src/components/Table';

import { dragObserver } from '../dragObserver';
import { MirrorRow } from '../style';

type RowDragProps = {
  dimension: 'xl' | 'l' | 'm' | 's';
  onRowDrag: TableProps['onRowDrag'];
  rowsDraggable?: boolean;
  tableRef?: React.RefObject<HTMLElement>;
  scrollBodyRef: React.RefObject<HTMLElement>;
};

export const RowDrag = ({ rowsDraggable, dimension, onRowDrag, scrollBodyRef }: RowDragProps) => {
  const { rootRef } = useContext(DropdownContext);

  const [rowDragging, setRowDragging] = useState(false);

  // save callback via useRef to not update dragObserver on each callback change
  const rowDragCallback = useRef(onRowDrag);
  const rowMirrorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    rowDragCallback.current = onRowDrag;
  }, [onRowDrag]);

  useEffect(() => {
    if (rowMirrorRef.current && rowDragging && rowsDraggable) {
      const observer = observeRect(rowMirrorRef.current, (rect: any) => {
        const topCoord = scrollBodyRef.current?.getBoundingClientRect().top || 0;
        const bottomCoord = scrollBodyRef.current?.getBoundingClientRect().bottom || 0;

        if (scrollBodyRef.current) {
          const scrollTop = scrollBodyRef.current.scrollTop;
          const scrollHeight = scrollBodyRef.current.scrollHeight;
          const offsetHeight = scrollBodyRef.current.offsetHeight;

          if (rect.bottom > bottomCoord && scrollHeight > offsetHeight && scrollTop + offsetHeight < scrollHeight) {
            scrollBodyRef.current.scrollBy({ top: Math.abs(bottomCoord - rect.bottom) });
          }
          if (rect.top < topCoord && scrollTop > 0) {
            scrollBodyRef.current.scrollBy({ top: -Math.abs(topCoord - rect.top) });
          }
        }
      });

      observer.observe();
      return () => observer.unobserve();
    }
  }, [rowsDraggable, rowDragging]);

  useEffect(() => {
    const body = scrollBodyRef.current;
    const rowMirror = rowMirrorRef.current;

    function handleDrop(item: HTMLElement | null, before: HTMLElement | null, immediate?: HTMLElement) {
      // console.log({ item: item?.dataset?.row, before: before?.dataset?.row, immediate: immediate?.dataset?.row });
      const rowId = item?.dataset?.row;
      const rowInGroup = item?.dataset?.ingroup;
      const beforeRowId = before?.dataset?.row ?? null;
      const immediateRowId = immediate?.dataset?.row;
      const immediateGroup = immediate?.dataset?.group;
      const immediateInGroup = immediate?.dataset?.ingroup;
      const immediateFirstRowInGroup = immediate?.dataset?.firstRowInGroup;

      if (rowId) {
        // навелись мышкой на заголовок группы
        if (immediateRowId && immediateGroup == 'true') {
          // перетаскиваемая строка не является частью этой группы
          if (rowInGroup !== immediateRowId) {
            const nextRowId = immediateFirstRowInGroup ?? beforeRowId;
            rowDragCallback.current?.(rowId, nextRowId, immediateRowId);
          }
        } else {
          rowDragCallback.current?.(rowId, beforeRowId, immediateInGroup ?? null);
        }
      }
    }
    function handleDragStart() {
      setRowDragging(true);
    }
    function handleDragEnd() {
      setRowDragging(false);
    }
    function renderMirror(dragRow: HTMLElement | null) {
      const firstCell = dragRow?.getElementsByClassName('td')[0];
      if (firstCell && rowMirror) {
        rowMirror.appendChild(firstCell.cloneNode(true));
      }
    }
    function removeMirror() {
      if (rowMirror && rowMirror.lastChild) {
        rowMirror.removeChild(rowMirror.lastChild);
      }
    }

    if (body && rowsDraggable) {
      const observer = dragObserver(
        [body],
        {
          mirrorRef: rowMirrorRef,
          renderMirror,
          removeMirror,
          dimension,
          direction: 'vertical',
          invalid: (el: HTMLElement, initEl: HTMLElement) => {
            const validDrag =
              initEl.getAttribute('data-dragicon') || initEl.parentElement?.getAttribute('data-dragicon');
            return !validDrag;
          },
        },
        handleDrop,
        handleDragStart,
        handleDragEnd,
      );
      return () => {
        observer.unobserve();
      };
    }
  }, [rowsDraggable]);

  return rowsDraggable
    ? createPortal(<MirrorRow $dimension={dimension} ref={rowMirrorRef} />, rootRef?.current || document.body)
    : null;
};
