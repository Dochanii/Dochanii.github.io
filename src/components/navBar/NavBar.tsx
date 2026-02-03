/** @jsxImportSource @emotion/react */
import { navBarContainer, navBarList, navBarTitle } from "./NavBar.style";

const NavBar = () => {
  return (
    <nav css={navBarContainer}>
        <div css={navBarTitle}>
            <h2>Euijong's Portfolio</h2>
        </div>
        
        <ul css={navBarList}>
            <li>About me</li>
            <li>Careers</li>
            <li>Skills</li>
            <li>Projects</li>
        </ul>
        
    </nav>
  )
}

export default NavBar