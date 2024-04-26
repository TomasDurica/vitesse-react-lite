export default function NotFound() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col items-center">
        <header className="flex items-center gap-8">
          <span className="row-span-2 text-40 text-sky-700 dark:text-sky-200">
            404
          </span>
          <span className="w-[5ch] text-8 font-light line-height-10">
            Page Not Found
          </span>
        </header>
        <a
          href="/"
          className="flex items-center gap-4 rounded-full bg-sky bg-opacity-10 pa-2 px-4 text-sky-700 shadow-md dark:(bg-sky bg-opacity-20 text-sky-200 hover:bg-opacity-40) hover:(bg-opacity-20)"
        >
          <div className="i-mdi-home size-6" />
          <span> Return to home </span>
        </a>
      </div>
    </div>
  )
}
