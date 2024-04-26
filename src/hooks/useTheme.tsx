type Theme = 'dark' | 'light'
const defaultTheme = 'dark'

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key)

    return item ? JSON.parse(item) : initialValue
  })

  const setValue = (value: T) => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue] as const
}

function useMediaQuery(query: string) {
  let mediaQuery: MediaQueryList | undefined
  const [matches, setMatches] = useState(false)

  const handler = (event: MediaQueryListEvent) => {
    setMatches(event.matches)
  }

  useEffect(() => {
    mediaQuery = window.matchMedia(query)

    mediaQuery.addEventListener('change', handler)

    return () => {
      mediaQuery?.removeEventListener('change', handler)
    }
  }, [])

  return matches
}

export const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({ theme: defaultTheme, setTheme: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [theme, setTheme] = useLocalStorage<Theme>(
    'dark-mode',
    prefersDarkMode ? 'dark' : 'light',
  )

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList?.add('dark')
    } else {
      document.documentElement.classList?.remove('dark')
    }
  }, [theme])

  const providerValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  )

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext)

  return [theme, setTheme] as const
}
