import { Tooltip, tooltipClasses, TooltipProps, styled } from '@mui/material';

import { STYLES } from '../../constants';

export const CustomTooltip = styled(({className, ...props}: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{popper: className}}
    placement='right'
  />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: STYLES.tooltip
}));
