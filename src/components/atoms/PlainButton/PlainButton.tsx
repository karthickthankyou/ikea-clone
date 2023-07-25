import { Loader } from '../../molecules/Loader'

export type IPlainButtonProps = {
  loading?: boolean
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
export const PlainButton = ({
  children,
  loading,
  ...props
}: IPlainButtonProps) => {
  return (
    <button type='button' {...props}>
      {loading ? <Loader /> : children}
    </button>
  )
}
