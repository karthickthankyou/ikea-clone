/* eslint-disable react/jsx-props-no-spreading */

import TablePagination, {
  TablePaginationProps,
} from '@mui/material/TablePagination/TablePagination'

export interface IPaginationProps {}

const Pagination = ({
  count,
  page,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
  ...props
}: TablePaginationProps) => (
  <TablePagination
    component='div'
    count={count}
    page={page}
    onPageChange={onPageChange}
    rowsPerPage={rowsPerPage}
    onRowsPerPageChange={onRowsPerPageChange}
    classes={{
      root: 'mt-4',
      displayedRows: 'font-sans',
      selectLabel: 'font-sans',
    }}
    {...props}
  />
)

export default Pagination
