export default function Footer() {
  return (
    <footer className="mb-5 md:mb-10 lg:mb-[185px]">
      <div className="flex flex-wrap font-mono text-base md:text-lg">
        <span className="block">&copy; { new Date().getFullYear() }</span>
        <nav className="ml-auto block">
          <ul className="flex space-x-6">
            <li>Press</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}