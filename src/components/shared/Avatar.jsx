import styled from "@emotion/styled";
import PropTypes from "prop-types";

export function Avatar({ user }) {
  function setImage(firstName, lastName, image) {
    let imageUrl = `https://avatars.dicebear.com/api/initials/${firstName}-${lastName}.svg`;
    if (image !== "") {
      imageUrl = image;
    }
    return imageUrl;
  }

  return (
    <Root gap={"16px"} alignItems={"center"}>
      <img src={setImage(user?.firstName, user?.lastName, user?.imageUrl)} />
    </Root>
  );
}

Avatar.propTypes = {
  user: PropTypes.object,
};

const Root = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  img {
    border-radius: 50%;
    width: 37.5px;
    height: 37.5px;
  }
`;
