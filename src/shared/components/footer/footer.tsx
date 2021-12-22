import React, { memo } from "react";
import { Image, View } from "react-native";
import styles from "./footer.style";
import Text from "../../components/text-wrapper/TextWrapper";
import { ImageGallery } from "../../../shared/constants/images.constants";

const Footer = (): React.ReactElement => {
  return (
    <View style={styles.footerContainer}>
      <Image
        style={{ width: 121, height: 45, marginBottom: 20 }}
        source={ImageGallery.logo}
      />
      <View
        style={{
          alignItems: "center",
          height: "25%",
        }}
      >
        <Text style={{ marginTop: 10, marginBottom: 10 }} h5>
          EVENTS VENUES GUEST SERVICES PACKAGES{" "}
        </Text>
        <Text style={{ marginTop: 2 }} h5>
          CONTACT FAQ CLEAR BAG POLICY{" "}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "15%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Image style={styles.footerIcon} source={ImageGallery.fbIcon} />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Image style={styles.footerIcon} source={ImageGallery.twitterIcon} />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Image style={styles.footerIcon} source={ImageGallery.youtubIcon} />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Image style={styles.footerIcon} source={ImageGallery.instaIcon} />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Image style={styles.footerIcon} source={ImageGallery.snapIcon} />
      </View>
      <View
        style={{
          height: "29%",
          justifyContent: "flex-start",
          width: "100%",
          alignItems: "center",
          backgroundColor: "#2c2c2c",
        }}
      >
        <Text style={{ marginTop: 15 }}>
          @2021 Waterfront Concerts. All Right Reserved.
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginTop: 5 }}>Designed by </Text>
          <Text style={{ marginTop: 5 }} color={"#58c5f6"}>
            {" "}
            Autumn lane
          </Text>
        </View>
      </View>
    </View>
  );
};
export default memo(Footer);
