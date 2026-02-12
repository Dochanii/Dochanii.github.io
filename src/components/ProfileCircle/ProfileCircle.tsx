import { profileCircleContainer, profileImage } from './ProfileCircle.style'

const ProfileCircle = (props: { image: string }) => {
  return (
    <div css={profileCircleContainer}>
        <img css={profileImage} src={props.image} alt="profile" />
    </div>
  )
}

export default ProfileCircle