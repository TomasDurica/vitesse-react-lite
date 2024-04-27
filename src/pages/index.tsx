import { useTheme } from '@/hooks/useTheme'

export default function Index() {
  const [theme, setTheme] = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="grid place-items-center px-4 h-dvh">
      <div className="flex flex-col items-center text-center">
        <header className="bold text-12 text-sky-700 dark:text-sky-200">
          Vitesse React Lite
        </header>
        <main className="pt-2 font-light italic">
          An opininionated and small Vite starter template for React
        </main>

        <nav className="pt-4">
          <a
            className="text-sky-700 dark:(text-sky-200)"
            href="https://vitejs.dev/"
          >
            Vite
          </a>
          <span className="px-2">•</span>
          <a
            className="text-sky-700 dark:(text-sky-200)"
            href="https://react.dev/"
          >
            React
          </a>
          <span className="px-2">•</span>
          <a
            className="text-sky-700 dark:(text-sky-200)"
            href="https://unocss.dev/"
          >
            UnoCSS
          </a>
        </nav>

        <nav className="flex gap-2 pt-8 text-sky-700 dark:(text-sky-200)">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full bg-sky bg-opacity-0 pa-3 hover:bg-opacity-20 dark:hover:bg-opacity-40"
          >
            {theme === 'dark' ? (
              <div className="i-mdi-weather-sunny size-6" />
            ) : (
              <div className="i-mdi-moon-and-stars size-6" />
            )}
          </button>
          <a
            href="http://github.com/TomasDurica/vitesse-react-lite"
            className="rounded-full bg-sky bg-opacity-0 pa-3 hover:bg-opacity-20 dark:hover:bg-opacity-40"
          >
            <div className="i-mdi-github size-6" />
          </a>
        </nav>
      </div>
    </div>
  )
}
