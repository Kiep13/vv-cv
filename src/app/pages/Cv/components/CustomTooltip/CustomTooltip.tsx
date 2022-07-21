import { Tooltip, tooltipClasses, TooltipProps, styled } from '@mui/material';

import { STYLES } from '../../constants';

export const CustomTooltip = styled(({className, ...props}: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{popper: className}}
    placement='top'
    PopperProps={{
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [50, -20],
          },
        },
      ],
    }}/>
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: STYLES.tooltip
}));
