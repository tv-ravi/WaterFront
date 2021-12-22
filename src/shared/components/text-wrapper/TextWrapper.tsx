import React from "react";
import RNText, { IRNTextProps } from "@freakycoder/react-native-custom-text";
import fonts from "../../../shared/theme/fonts";

interface ITextWrapperProps extends IRNTextProps {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
}

const TextWrapper: React.FC<ITextWrapperProps> = ({
  fontFamily = fonts.seuzOne.regular,
  color = "#e7e3e3",
  children,
  ...rest
}) => {
  return (
    <RNText fontFamily={fontFamily} color={color} {...rest}>
      {children}
    </RNText>
  );
};

export default TextWrapper;
