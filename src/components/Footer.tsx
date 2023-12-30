import Markdownify from "./Markdownify"
import GithubIcon from "../assets/github.svg?react"

export default function Footer({ className }: { className: string}) {
  const madeByCopy = `Made with ❤️ by <a className="underline" href="https://makaroni4.com" target="_blank">Anatoli Makarevich</a>`

  return (
    <footer className={`container ${className}`}>
      <hr className="mb-4" />

      <div className="flex flex-col md:flex-row justify-between py-6 text-lg text-slate-600">
        <div className="mb-4 md:mb-0">
          <a
            className="flex mb-3 mr-4 underline"
            href="https://github.com/makaroni4/habit-tracker-generator"
          >
            <GithubIcon
              className="w-4 mr-2"/>
            Source code
          </a>
          <a
            className="block underline"
            href="https://github.com/makaroni4/habit-tracker-generator/issues"
          >
            Feedback
          </a>
        </div>

        <div>
          <Markdownify>{madeByCopy}</Markdownify>
        </div>
      </div>
    </footer>
  )
}
