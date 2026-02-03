
import ProfileCircle from "../ProfileCircle/ProfileCircle";
import { careerContainer, careerItemContainer, careerTitle, careerProfile, careerList, careerListItem } from "./Career.style";
import profileImage from "../../assets/images/profile.png";

const Career = () => {
    return (
        <div css={careerContainer}>
            <div css={careerTitle}>
                <h2>CAREER</h2>
            </div>
            <div css={careerItemContainer}>
                <div css={careerProfile}>
                    <ProfileCircle image={profileImage} />

                </div>
                <ul css={careerList}>
                    <li css={careerListItem}>
                        <span>🎓 Department of Software in Sejong Univ.</span>
                    </li>
                    <li css={careerListItem}>
                        <span>👨🏻‍💻 Sejong Univ. LikeLion 12nd</span>
                    </li>
                    <li css={careerListItem}>
                        <span>🏆 2025 해커톤 챌린져스 해키토키 - 특별상 수상</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Career;