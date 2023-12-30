import Logo from "../assets/logo.svg?react"
import GithubIcon from "../assets/github.svg?react"

function Navbar({ className }: { className: string }) {
  return (
    <header
      className={`flex items-center justify-between mb-8 print:hidden ${className}`}>
      <Logo
        className="h-8 md:h-12" />

      <a
        target="_blank"
        href="https://github.com/makaroni4/habit-tracker-generator">
        <GithubIcon
          className="h-8 md:h-12 hover:opacity-70" />
      </a>
    </header>
  )
}

export default Navbar
