import { ReactNode } from 'react';
import Atropos from 'atropos/react';
import 'atropos/css';

export const LayoutAtropos = (
  { scale = undefined, rotateClass = undefined, innerClass = undefined, styles = undefined, children } 
  :
  { scale?: string | undefined; rotateClass?: string | undefined; innerClass?: string | undefined; styles?: string | undefined; children?: ReactNode }) => {
  return (
    <Atropos
      alwaysActive={true}
      activeOffset={50}
      duration={700}
      rotate={true}
      rotateTouch={true}
      rotateXMax={20}
      rotateYMax={20}
      rotateXInvert={false}
      rotateYInvert={false}
      stretchX={0}
      stretchY={0}
      stretchZ={0}
      commonOrigin={true}
      shadow={false}
      shadowOffset={0}
      shadowScale={1}
      highlight={true}
      scaleClassName={scale}
      rotateClassName={rotateClass}
      innerClassName={innerClass}
      className={styles}
      rootChildren
      scaleChildren
      rotateChildren
    >
      {children}
    </Atropos>
  );
};
