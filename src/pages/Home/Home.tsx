/** @jsxImportSource @emotion/react */
import About from "../../components/outlines/About/About";
import Snow from "../../components/Snow/Snow";
import { homeContainer } from "./Home.style"

const Home = () => {
    return (
        <div css={homeContainer}>
            <Snow />
            <About />
        </div>
    )
}

export default Home;