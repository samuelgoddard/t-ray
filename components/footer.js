import Container from './container'

export default function Footer() {
  return (
    <footer className="mb-4">
      <Container>
        <span className="flex flex-wrap font-mono">
          <span className="block">&copy; { new Date().getFullYear() }</span>
          <nav className="ml-auto block">
            <ul className="flex">
              <li>Press</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </nav>
        </span>
      </Container>
    </footer>
  )
}