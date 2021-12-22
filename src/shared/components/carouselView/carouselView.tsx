import React, { memo } from "react";
import { Dimensions, View, ImageBackground, Image } from "react-native";
import styles from "./carouselView.style";
import Text from "../../components/text-wrapper/TextWrapper";
import Carousel /*Pagination*/ from "react-native-snap-carousel";
import color from "../../../shared/theme/colors";

import { ImageGallery } from "../../constants/images.constants";
type PropsType = {
  dataArray: [];
  itemHeight: number;
  forVenue: boolean;
};

const CarouselView = (props: PropsType): React.ReactElement => {
  const { dataArray, itemHeight, forVenue } = props;
  const { width: screenWidth } = Dimensions.get("window");

  const _renderFirstItem = (data: any) => {
    console.log(data.item.image);
    return (
      <View
        style={{
          height: itemHeight,
          backgroundColor: color.light.LabelColor,
        }}
      >
        <ImageBackground
          source={{
            uri: data.item.image,
          }}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flex: 0.7,
            }}
          >
            <ImageBackground
              source={ImageGallery.grayBg}
              resizeMode="stretch"
              style={styles.grayImageBg}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1.5,
                }}
              >
                <ImageBackground
                  source={ImageGallery.pinkBg}
                  resizeMode="stretch"
                  style={{
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      paddingTop: "8%",
                      paddingBottom: "8%",
                    }}
                  >
                    NEW SHOW
                  </Text>
                </ImageBackground>
                <View
                  style={{
                    flex: 1.5,
                    alignItems: "flex-end",
                  }}
                >
                  <Text
                    color={color.light.black}
                    style={{ fontSize: 15, fontWeight: "normal" }}
                  >
                    DEC{" "}
                  </Text>
                  <Text
                    color={color.light.primary}
                    style={{ fontSize: 15, marginRight: 5 }}
                  >
                    25{" "}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: "center",
                }}
              >
                <Text
                  color={color.light.black}
                  style={{ fontSize: 20, lineHeight: 20 }}
                >
                  BON IVER
                </Text>
                <Text
                  color={color.light.primaryPink}
                  style={{
                    fontSize: 35,
                    lineHeight: 40,
                  }}
                >
                  SAT JUN 11
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={ImageGallery.locationIcon}
                    style={{ height: 19 }}
                  />
                  <Text
                    color={"#000"}
                    style={{
                      fontSize: 15,
                    }}
                  >
                    waterfront Drive,Provedence, RI
                  </Text>
                </View>
              </View>
            </ImageBackground>
            <ImageBackground
              source={ImageGallery.blueBg}
              resizeMode="stretch"
              style={styles.blueImageBg}
            >
              <Text style={{ fontSize: 20 }}>ON SALE NOW</Text>
            </ImageBackground>
          </View>
        </ImageBackground>
      </View>
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _renderSecondItem = (data: any) => {
    return (
      <View
        style={{
          height: itemHeight,
        }}
      >
        <ImageBackground
          source={{
            uri: data.item.featureImage,
          }}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        />
      </View>
    );
  };

  /*  const _dotView = (dataCount: number, currentIndex: number) => {
    return (
      <Pagination
        dotsLength={dataCount}
        activeDotIndex={currentIndex}
        containerStyle={{ backgroundColor: "rgba(203,14,14,0.75)" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
        }}
        inactiveDotOpacity={0.7}
        inactiveDotScale={0.9}
      />
    );
  };*/
  return (
    <View
      style={{
        height: itemHeight,
      }}
    >
      <Carousel
        layout={"default"}
        data={dataArray}
        loop={true}
        autoplay={true}
        autoplayInterval={2000}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        renderItem={forVenue ? _renderSecondItem : _renderFirstItem}
        /*onSnapToItem={(index) => {
           console.log(index);
        }}*/
      />
      {/*{_dotView(dataArray.length, 1)}*/}
    </View>
  );
};
export default memo(CarouselView);
