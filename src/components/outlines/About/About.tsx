import ProfileCircle from "../../ProfileCircle/ProfileCircle";
import profileImage from "../../../assets/images/profile.png";
import {
    introduce_line,
    static_txt,
    dynamic_wrapper,
    dynamic_txts,
    dynamic_txts_li,
    dynamic_txts_li_span,
    dynamic_txts_li_span_after,
    introduce_circle,
    about_container
} from "./About.style";

const About = () => {
    return (
        <div css={about_container}>
            <div css={introduce_circle}>
                <ProfileCircle image={profileImage} />
            </div>
            <div css={introduce_line}>
                <div css={static_txt}>안녕하세요!</div>
                <div css={dynamic_wrapper}>
                    <ul css={dynamic_txts}>
                        <li css={dynamic_txts_li}>
                            <span css={dynamic_txts_li_span}>
                                문제의 원인을 끝까지 파고들어
                                <span css={dynamic_txts_li_span_after}></span>
                            </span>
                        </li>
                        <li css={dynamic_txts_li}>
                            <span css={dynamic_txts_li_span}>
                                다음 도전에 적용하는
                                <span css={dynamic_txts_li_span_after}></span>
                            </span>
                        </li>
                        <li css={dynamic_txts_li}>
                            <span css={dynamic_txts_li_span}>
                                개발자
                                <span css={dynamic_txts_li_span_after}></span>
                            </span>
                        </li>
                        <li css={dynamic_txts_li}>
                            <span css={dynamic_txts_li_span}>
                                윤의종입니다.
                                <span css={dynamic_txts_li_span_after}></span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;