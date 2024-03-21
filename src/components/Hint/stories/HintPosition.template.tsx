import * as React from 'react';
import { Hint, Button } from '@admiral-ds/react-ui';
import type { HintProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

const StyledButton = styled(Button)`
  padding: 4px;
`;

export const HintPositionTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: HintProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [visible4, setVisible4] = React.useState(false);
  const handleVisibilityChange1 = (visible: boolean) => setVisible1(visible);
  const handleVisibilityChange2 = (visible: boolean) => setVisible2(visible);
  const handleVisibilityChange3 = (visible: boolean) => setVisible3(visible);
  const handleVisibilityChange4 = (visible: boolean) => setVisible4(visible);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Hint
          {...props}
          visible={visible1}
          onVisibilityChange={handleVisibilityChange1}
          renderContent={() => text}
          anchorId="right_pos"
          hintPosition="right"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="right_pos">
            Right
          </StyledButton>
        </Hint>
        <Hint
          {...props}
          visible={visible2}
          onVisibilityChange={handleVisibilityChange2}
          renderContent={() => text}
          id="top_pos"
          hintPosition="top"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="top_pos">
            Top
          </StyledButton>
        </Hint>
        <Hint
          {...props}
          visible={visible3}
          onVisibilityChange={handleVisibilityChange3}
          renderContent={() => text}
          anchorId="bottom_pos"
          hintPosition="bottom"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="bottom_pos">
            Bottom
          </StyledButton>
        </Hint>
        <Hint
          {...props}
          visible={visible4}
          onVisibilityChange={handleVisibilityChange4}
          renderContent={() => text}
          id="left-pos"
          hintPosition="left"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="left-pos">
            Left
          </StyledButton>
        </Hint>
      </div>
    </ThemeProvider>
  );
};
