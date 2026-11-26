import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

type GoatCounter = { count?: (vars: { referrer?: string }) => void }

// Normalized so that /kt/ (direct visit on GitHub Pages) and /kt (client-side) compare equal.
const pagePath = (pathname: string) => pathname.replace(/\/+$/, '') || '/'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  })

  // GoatCounter counts the first page on load (scripts/add-goatcounter.mjs injects it into
  // the built HTML). Navigations inside the app change the URL without a page load, so they
  // are counted here. The path comes from the current URL through the path callback set in
  // the injected snippet; the referrer is the previous page, as a full page load would report.
  if (typeof window !== 'undefined') {
    router.subscribe('onResolved', ({ fromLocation, toLocation }) => {
      if (!fromLocation || pagePath(fromLocation.pathname) === pagePath(toLocation.pathname)) return
      const gc = (window as Window & { goatcounter?: GoatCounter }).goatcounter
      gc?.count?.({ referrer: location.origin + fromLocation.pathname })
    })
  }

  return router
}
