import { SVGProps } from 'react'

export const CrossIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="red"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z"
      fillRule="evenodd"
    />
  </svg>
)
