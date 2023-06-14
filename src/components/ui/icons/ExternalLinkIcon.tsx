import { ComponentProps } from 'react';

type Props = ComponentProps<'svg'>;

export const ExternalLinkIcon = (props: Props) => {
  return (
    <svg
      aria-label="外部リンクを開きます"
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.8005 11.8005H2.20052V2.20052H6.46719V0.867188H0.867188V13.1339H13.1339V7.53385H11.8005V11.8005Z"
        fill="#808080"
      />
      <path
        d="M8.13307 0.867188V2.20052H10.8664L5.06641 8.00052L5.99974 8.93385L11.7997 3.13385V5.86719H13.1331V0.867188H8.13307Z"
        fill="#808080"
      />
    </svg>
  );
};
