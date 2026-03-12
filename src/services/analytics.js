const GA_ID = "G-4EJX4S6477"

export const trackPage = (path) => {
  if (!window.gtag) return

  window.gtag("config", GA_ID, {
    page_path: path
  })
}

export const trackEvent = (name, params = {}) => {
  if (!window.gtag) return

  window.gtag("event", name, params)
}
