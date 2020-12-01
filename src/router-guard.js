import router from './router'
import NProgress from 'nprogress' // progress bar
import getPageTitle from '@/utils/index'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  next()
  // set page title
  document.title = getPageTitle(to.meta.title)
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
