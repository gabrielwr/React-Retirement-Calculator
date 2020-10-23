import styled from "styled-components";

/* Colors */
export const BUTTON_BORDER_BLUE = "#4A90E2";
export const GRAPH_AREA_PURPLE = "rgb(219, 218, 240)";
export const LINE_DEEP_PURPLE = "rgb(70, 65, 180)";

/* Font Family */
export const FONT_FAMILY_LIGHT =
  "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif";
export const FONT_FAMILY_MEDIUM =
  "HelveticaNeue-Medium, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif";
export const FONT_FAMILY =
  "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif";

/* Font Sizing */
export const FONT_SIZE_BUTTON = "16px";
export const FONT_SIZE_SMALL = "18px";
export const FONT_SIZE_MEDIUM = "20px";
export const FONT_SIZE_LARGE = "22px";
export const FONT_SIZE_X_LARGE = "24px";

export const IconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid ${BUTTON_BORDER_BLUE};
  margin-left: ${(props) => props.marginLeft && props.marginLeft};
  transition: transform 50ms;
  &:hover {
    transform: scale(1.15);
  }
`;

export const IconImage = styled.img`
  height: 25px;
  width: 25px;
`;
