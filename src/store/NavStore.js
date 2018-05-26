import { Container } from 'unstated'

export default class NavStore extends Container {
  state = {
    mobileNavOpen: false,
  }

  openMobileNav = () => {
    this.setState({
      mobileNavOpen: true,
    })
  }

  closeMobileNav = () => {
    this.setState({
      mobileNavOpen: false,
    })
  }

  toggleMobileNav = () => {
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen,
    })
  }
}
