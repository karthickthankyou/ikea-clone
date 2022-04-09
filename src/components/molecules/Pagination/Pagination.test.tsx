import { mount } from '@cypress/react'
import Pagination from './Pagination'

describe('Pagination Component', () => {
  it('Pagination renders', () => {
    mount(
      <Pagination
        count={100}
        page={2}
        rowsPerPage={10}
        rowsPerPageOptions={[12, 24, 36, 48]}
        onPageChange={(v) => console.log(v)}
      />
    )
  })
})
