import React from "react";

type Props = {
  style?: React.CSSProperties;
  className?: string;
};

const HandGesture = ({ style, className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    fill="currentColor"
    aria-hidden="true"
    style={{ ...style }}
    className={className}
  >
    <path
      fill="currentColor"
      d="M15.27,2.9A10.27,10.27,0,0,1,16.7,5.36a.34.34,0,0,1-.25.41.36.36,0,0,1-.38-.17,9.55,9.55,0,0,0-1.32-2.27,9.15,9.15,0,0,0-2-1.72.32.32,0,0,1-.11-.45h0a.35.35,0,0,1,.47-.1A10.07,10.07,0,0,1,15.27,2.9Zm-1,.8a7.56,7.56,0,0,1,1,1.66.34.34,0,0,1-.17.44h0a.35.35,0,0,1-.45-.18,6.63,6.63,0,0,0-.88-1.5A7,7,0,0,0,12.47,3a.33.33,0,0,1-.1-.45h0a.35.35,0,0,1,.47-.1h0A7.58,7.58,0,0,1,14.28,3.7ZM9.48,18.64a6.66,6.66,0,0,0,9.39.78c.15-.13.29-.27.43-.41,2.4-2.2,1.67-5.64,1.29-7.46a3.43,3.43,0,0,0-.1-.52,11.74,11.74,0,0,1,0-4c0-.11,0-.22.05-.33.16-1,.27-1.73-.76-1.92s-1.5,1-1.7,1.56a12.53,12.53,0,0,0-.45,1.88,1.06,1.06,0,0,1-.89,1,1.58,1.58,0,0,1-1-.44l-6-6.38a1.15,1.15,0,0,0-1.59-.06,1.1,1.1,0,0,0-.08,1.54h0l5,5.2a.2.2,0,0,1,0,.27H13l-.32.17a.29.29,0,0,1-.35,0l-5.76-6a1.13,1.13,0,0,0-1.6,0H5A1.09,1.09,0,0,0,4.9,5h0l5.68,6a.24.24,0,0,1,0,.34h0l-.23.3a.18.18,0,0,1-.25,0h0L4.87,6.14a1.13,1.13,0,0,0-1.59-.06,1.12,1.12,0,0,0,0,1.57h0L8.89,13.6A.36.36,0,0,1,9,14l-.12.37a.18.18,0,0,1-.22.12H8.57L4.71,10.37a1.14,1.14,0,0,0-1.59,0,1.11,1.11,0,0,0-.07,1.55h0Zm-8.43-4a9.88,9.88,0,0,0,1.88,2.15,10.43,10.43,0,0,0,2.5,1.46.33.33,0,0,0,.44-.19.33.33,0,0,0-.18-.43h0a10,10,0,0,1-2.29-1.3,9.62,9.62,0,0,1-1.77-2,.35.35,0,0,0-.47-.12h0a.31.31,0,0,0-.12.43v0Zm1.41-.23a7.09,7.09,0,0,0,1.25,1.43,7.62,7.62,0,0,0,1.67,1,.35.35,0,0,0,.45-.18.34.34,0,0,0-.18-.44,6.48,6.48,0,0,1-1.47-.89A6.93,6.93,0,0,1,3,14.09a.35.35,0,0,0-.47-.1.32.32,0,0,0-.07.45h0Z"
    />
  </svg>
);

export default HandGesture;
