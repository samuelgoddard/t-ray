export default function Footer() {
  return (
    <footer className="lg:mb-[13vw]">
      <div className="flex flex-wrap font-mono">
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