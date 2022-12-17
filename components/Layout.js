import { Navbar, Footer } from "flowbite-react"

export default function Layout({children}) {
    return (
        <div  className="container">
            <div className="header">
                <Navbar
                    fluid={true}
                    rounded={false}
                    className="pt-5 main-nav"
                    >
                    <Navbar.Brand href="https://flowbite.com/">
                        <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Navbar.Link
                        href="/"
                        active={true}
                        >
                        Home
                        </Navbar.Link>
                        <Navbar.Link href="/about">
                        About
                        </Navbar.Link>
                        <Navbar.Link href="/models">
                        Models
                        </Navbar.Link>
                        <Navbar.Link href="/blog-page">
                        Blog
                        </Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <div className="cont-wrapper">{children}</div>

            <div className="footer">
                <Footer container={true} className="footer">
                    <Footer.Copyright
                        href="#"
                        by="Flowbite™"
                        year={2022}
                    />
                    <Footer.LinkGroup>
                        <Footer.Link href="#">
                        About
                        </Footer.Link>
                        <Footer.Link href="#">
                        Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="#">
                        Licensing
                        </Footer.Link>
                        <Footer.Link href="#">
                        Contact
                        </Footer.Link>
                    </Footer.LinkGroup>
                </Footer>
            </div>
        </div>    
    )
}