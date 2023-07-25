import { ReactNode } from 'react'
import { ProductCard01Skeleton } from 'src/components/molecules/ProductCard01/ProductCard01'
import { IconBox } from '@tabler/icons-react'
import { Pagination } from '../../molecules/Pagination'
import { LoaderPanel } from '../../molecules/Loader'
import { AlertSection } from '../AlertSection'
import { SimplePagination } from '../SimplePagination'
import { SimplePaginationProps } from '../SimplePagination/SimplePagination'

export interface IShowDataProps {
  loading: boolean
  error?: string
  pagination: {
    skip?: number
    take?: number
    resultCount?: number
    totalCount?: number
    setSkip: (skip: number) => void
    setTake: (take: number) => void
  }
  title: ReactNode
  children?: ReactNode
  className?: string
}
export const NoResults = () => (
  <div className='flex flex-col items-center justify-center h-screen50'>
    <div className='text-left'>
      <div className='text-xl font-semibold'>No matching products found.</div>
      <div className='mt-1 text-sm text-gray'>Try modifying the filters.</div>
    </div>
  </div>
)

export const ShowData = ({
  loading,
  error,
  pagination: {
    resultCount = 0,
    setSkip,
    setTake,
    skip = 0,
    take = 12,
    totalCount = 0,
  },
  children,
  title,
  className = 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
}: IShowDataProps) => {
  if (error) {
    return (
      <AlertSection>
        Oops. Something went wrong.{' '}
        <span className='text-xs'>Psst. {error}</span>
      </AlertSection>
    )
  }
  return (
    <div className='min-h-[calc(100vh-4rem)]'>
      {loading && (
        <div className={`${className} mt-2`}>
          {Array.from(Array(take).keys()).map((item) => (
            <ProductCard01Skeleton key={item} />
          ))}
        </div>
      )}
      {!loading && !error && resultCount === 0 && <NoResults />}

      {!loading && resultCount > 0 && (
        <div>
          <div className='mb-2 text-lg font-semibold'>{title}</div>
          <div className={className}>{children}</div>
          <div className='flex justify-center'>
            <Pagination
              count={totalCount || 0}
              page={(skip || 0) / (take || 12)}
              rowsPerPage={take || 0}
              rowsPerPageOptions={[2, 4, 12, 24, 36, 48]}
              onPageChange={(_: any, c: number) => setSkip(c * (take || 12))}
              onRowsPerPageChange={(v: any) => {
                setTake(+v.target.value)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export interface IShowDataSimpleProps {
  loading: boolean
  error?: string
  pagination: SimplePaginationProps
  title: ReactNode
  children?: ReactNode
  className?: string
}

export const ShowDataSimple = ({
  loading,
  error,
  pagination: { setSkip, setTake, skip, take, resultCount },
  children,
  title,
  className = 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
}: IShowDataSimpleProps) => (
  <div>
    {error && (
      <AlertSection>
        Oops. Something went wrong.{' '}
        <span className='text-xs'>Psst. {error}</span>
      </AlertSection>
    )}
    {loading && <LoaderPanel />}

    {!loading && (
      <div>
        <div className='mb-2 text-lg font-semibold'>{title}</div>
        {!loading && !error && resultCount === 0 && <NoResults />}
        <div className={className}>{children}</div>
        <div className='flex justify-center'>
          <SimplePagination
            setSkip={setSkip}
            setTake={setTake}
            skip={skip}
            take={take}
            resultCount={resultCount}
          />
        </div>
      </div>
    )}
  </div>
)
