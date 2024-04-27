export default function NotFound() {
  return (
    <div className="grid place-items-center px-4 h-dvh">
      <div className="flex flex-col items-center gap-8 sm:(gap-4)">
        <header className="flex flex-col items-center sm:(flex-row gap-8)">
          <span className="row-span-2 text-32 text-sky-700 leading-none sm:(text-40) dark:text-sky-200">
            404
          </span>
          <span className="py-2 text-6 font-light leading-tight sm:(w-[5ch] text-8)">
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
