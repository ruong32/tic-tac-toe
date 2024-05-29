import { SVGProps } from 'react'

export const CircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="lime"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M16,32A16,16,0,1,0,0,16,16,16,0,0,0,16,32ZM16,2A14,14,0,1,1,2,16,14,14,0,0,1,16,2Z" />
  </svg>
)
