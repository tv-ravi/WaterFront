import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
// import * as NavigationService from "react-navigation-helpers";
// import colors from "@colors";
import styles from "./EventScreen.style";
import { apiHelper } from "../../services/api";
import CarouselView from "../../shared/components/carouselView/carouselView";
import { textKey } from "../../shared/constants/texts.constants";
import Button from "../../shared/components/button/button";
import colors from "../../shared/theme/colors";
import Footer from "../../shared/components/footer/footer";

/*type PropsType = {
  _id: number;
  address: string;
  title: string;
};*/

export default function EventScreen(): React.ReactElement {
  const [allBanner, setAllBanner] = useState([]);
  const [venuesForSlide, setVenuesForSlide] = useState([]);
  const { height: ScreenHeight } = Dimensions.get("window");
  useEffect(() => {
    apiHelper
      .fetchGetApi(apiHelper.apiUrlEndPoints.allBanners)
      .then((res) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setAllBanner(res.data.banners);
      })
      .catch((err) => {
        console.error("Fetch banner Error: ", err);
      });

    apiHelper
      .fetchGetApi(apiHelper.apiUrlEndPoints.eventsVenueByCity)
      .then((res) => {
        /* setVenuesArr([
          {
            _id: "0",
            address: "ALL",
            title: "ALL",
          },
        ]);*/
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (res && res.status == 1) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          setVenuesForSlide(res.data);
        }
      })
      .catch((err) => {
        console.error("Fetch Venue Error: ", err);
      });
    getAllEvents(0, 15, "ONSALE", 0, 0, 0, 0);
  }, []);

  const getAllEvents = (
    currentPage: number,
    pageSize: number,
    eventType: string,
    cityID: number,
    venueId: number,
    lat: number,
    long: number,
  ) => {
    let appendUrl =
      "?currentPage=" +
      currentPage +
      "&pageSize=" +
      pageSize +
      "&eventType=" +
      eventType;

    if (cityID != 0) {
      appendUrl = appendUrl + "&cityId=" + cityID;
    }
    if (venueId != 0) {
      appendUrl = appendUrl + "&venueId=" + venueId;
    }

    if (lat != 0 && long != 0) {
      console.log("LATLng IS NOT NULL : " + lat);
      appendUrl = appendUrl + "&lat=" + lat + "&long=" + long;
    }
    console.log("Final URL  : " + appendUrl);
    apiHelper
      .fetchGetApi(apiHelper.apiUrlEndPoints.allEvents + appendUrl)
      .then((res) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (res && res.status == 1) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
        }
      })
      .catch((err) => {
        console.error("Fetch Venue Error: ", err);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <CarouselView
        dataArray={allBanner}
        itemHeight={ScreenHeight / 2}
        forVenue={false}
      />
      <CarouselView
        dataArray={venuesForSlide}
        itemHeight={ScreenHeight / 4}
        forVenue={true}
      />
      <View
        style={{
          borderColor: colors.light.black,
          borderBottomWidth: 1,
          paddingBottom: 20,
          paddingLeft: 10,
        }}
      >
        <Text style={styles.titleTextStyle}>{textKey.featuredShows}</Text>
        <Button
          buttonText={textKey.getUpdateOnOurEvents}
          style={{
            backgroundColor: colors.light.primary,
            marginLeft: 0,
          }}
        />
      </View>
      <Footer />
    </ScrollView>
  );
}
