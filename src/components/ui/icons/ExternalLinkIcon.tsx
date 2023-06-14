import { ComponentProps } from 'react';

type Props = ComponentProps<'svg'>;

export const ExternalLinkIcon = (props: Props) => {
  return (
    <svg
      aria-label="外部リンクを開きます"
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2836_15208)">
        <rect fill="white" height="16" width="16" />
        <g clipPath="url(#clip1_2836_15208)">
          <path
            d="M12.7995 12.8005H3.19954V3.20052H7.46621V1.86719H1.86621V14.1339H14.1329V8.53385H12.7995V12.8005Z"
            fill="#626264"
          />
          <path
            d="M9.13307 1.86719V3.20052H11.8664L6.06641 9.00052L6.99974 9.93385L12.7997 4.13385V6.86719H14.1331V1.86719H9.13307Z"
            fill="#626264"
          />
        </g>
      </g>
      <defs>
        <clipPath>
          <rect fill="white" height="16" width="16" />
        </clipPath>
        <clipPath>
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};
