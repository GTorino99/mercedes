import { Navbar, Footer } from "flowbite-react"

export default function Layout({children}) {
    return (
        <div  className="container">
            <div className="header">
                <Navbar
                    fluid={true}
                    rounded={false}
                    className="pt-5 main-nav bg-[#1A2238]"
                    >
                    <Navbar.Brand href="https://flowbite.com/">
                        <img
                        src="https://www.freepnglogos.com/uploads/mercedes-logo-png/mercedes-logo-take-care-novembro-2.png"
                        className="mr-3 h-6 sm:h-9"
                        width="40px"
                        height="40px"
                        alt="Flowbite Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                        Mercedes
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

            <div className="footer mt-4">
                <Footer container={true} className="footer bg-[#1A2238]">
                    <Footer.Copyright className="text-white"
                        href="/"
                        by="Mercedes"
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