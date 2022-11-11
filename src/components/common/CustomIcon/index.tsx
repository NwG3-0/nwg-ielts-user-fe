import { CloseIconType } from '@src/models/common'

export const CloseIcon = ({ width, height, color }: CloseIconType) => {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 1.67999L10.32 0L5.99999 4.32L1.67999 0L0 1.67999L4.32 5.99999L0 10.32L1.67999 12L5.99999 7.68L10.32 12L12 10.32L7.68 5.99999L12 1.67999Z"
        fill="#FFFFFF"
      />
    </svg>
  )
}
