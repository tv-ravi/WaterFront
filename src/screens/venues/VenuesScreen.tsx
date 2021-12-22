import React, { useEffect, useState } from "react";
import { View, FlatList, Image, Text } from "react-native";
import styles from "./VenuesScreen.style";
import Footer from "../../shared/components/footer/footer";
import Header from "../../shared/components/header/header";
import { apiHelper } from "../../services/api";
import Button from "../../shared/components/button/button";
import color from "../../shared/theme/colors";

export default function VenuesScreen(): React.ReactElement {
  const [venuesArr, setVenuesArr] = useState([]);

  useEffect(() => {
    apiHelper
      .fetchGetApi(apiHelper.apiUrlEndPoints.eventsVenueByCity)
      .then((res) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (res && res.status == 1) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          setVenuesArr(res.data);
          console.log(venuesArr);
        }
      })
      .catch((err) => {
        console.error("Fetch Venue Error: ", err);
      });
  }, []);

  const _renderListItem = (data: any) => {
    return (
      <View
        style={{
          height: 340,
          marginBottom: 15,
        }}
      >
        <View
          style={{
            height: 180,
            justifyContent: "center",
            borderWidth: 0.7,
            borderColor: "#d4cfcf",
            backgroundColor: "#ffffff",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Image
            source={{
              uri: data.item.featureImage,
            }}
            resizeMode="contain"
            style={{ flex: 1, marginBottom: 40 }}
          />
        </View>
        <View
          style={{
            height: 120,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.6,
            borderColor: "#e3e1e1",
            backgroundColor: "#ffffff",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              width: 250,
            }}
          >
            {data.item.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              color: "#2b2b2b",
              width: 250,
              marginTop: 5,
            }}
          >
            {data.item.address}
          </Text>
        </View>
        <Button
          style={{ backgroundColor: color.light.primary }}
          buttonText={"MORE INFO"}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={venuesArr}
        renderItem={_renderListItem}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Footer />}
        ListHeaderComponent={<Header headerText={"VENUES"} />}
      />
    </View>
  );
}
