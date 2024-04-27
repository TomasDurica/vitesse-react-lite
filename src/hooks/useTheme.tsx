type Theme = 'dark' | 'light' | undefined

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
  const mediaQuery = window.matchMedia(query)
  const [matches, setMatches] = useState(mediaQuery.matches)

  const handler = (event: MediaQueryListEvent) => {
    setMatches(event.matches)
  }

  useEffect(() => {
    mediaQuery.addEventListener('change', handler)

    return () => {
      mediaQuery?.removeEventListener('change', handler)
    }
  }, [])

  return matches
}

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({ theme: undefined, setTheme: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const preferredTheme = prefersDarkMode ? 'dark' : 'light'

  const [themeOverride, setThemeOverride] = useLocalStorage<Theme>(
    'dark-mode',
    undefined,
  )

  const theme = themeOverride ?? preferredTheme

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
      setTheme: (value: Theme) => {
        if (value === preferredTheme) {
          setThemeOverride(undefined)
        } else {
          setThemeOverride(value)
        }
      },
    }),
    [preferredTheme, theme],
  )

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
