import { Suspense } from 'react'
import routes from 'virtual:generated-pages-react'
import { useRoutes } from 'react-router-dom'

function Loader() {
  return (
    <div className="grid place-items-center h-dvh">
      <div className="h-16 flex gap-2">
        <div className="h-full animate-[bounce_.8s_infinite]">
          <div className="size-4 rounded-full bg-sky-700 dark:bg-sky-200"></div>
        </div>
        <div className="h-full animate-[bounce_.8s_infinite_100ms]">
          <div className="size-4 rounded-full bg-sky-700 dark:bg-sky-200"></div>
        </div>
        <div className="h-full animate-[bounce_.8s_infinite_200ms]">
          <div className="size-4 rounded-full bg-sky-700 dark:bg-sky-200"></div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-w-64 text-gray-500 font-sans dark:text-gray-200">
      <Suspense fallback={<Loader />}>{useRoutes(routes)}</Suspense>
    </div>
  )
}
