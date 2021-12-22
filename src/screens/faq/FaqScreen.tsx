import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./FaqScreen.style";
import Button from "../../shared/components/button/button";
import color from "../../shared/theme/colors";
import { textKey } from "../../shared/constants/texts.constants";
import { apiHelper } from "../../services/api";
import Footer from "../../shared/components/footer/footer";
import Icon from "react-native-vector-icons/FontAwesome";

export default function FaqScreen(): React.ReactElement {
  const [buttonText, setButtonText] = useState("");
  const [faqArr, setFaqArr] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    apiHelper
      .fetchGetApi(apiHelper.apiUrlEndPoints.faqList)
      .then((res) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (res && res.status == 1) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          setFaqArr(res.data);
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          setButtonText(res.data[index].name);
          setIndex(0);
          console.log(faqArr);
        }
      })
      .catch((err) => {
        console.error("Fetch FAQ Error: ", err);
      });
  }, []);

  const headerView = () => {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerSubContainer}>
            <Text style={styles.headerText}>{"FAQ"}</Text>
            <View style={styles.headerRightContainer}>
              <View style={styles.rightSubContainer}>
                <Text style={styles.textRegular}>
                  Can't find and answer? Call us at{" "}
                </Text>
                <Text style={styles.underlineText}> {textKey.wfNumber}</Text>
              </View>
              <View style={[styles.rightSubContainer]}>
                <Text style={styles.textRegular}>or email </Text>
                <Text style={styles.underlineText}>{textKey.wfEmail}</Text>
              </View>
            </View>
          </View>
        </View>
        <Button
          buttonText={buttonText}
          style={{ backgroundColor: color.light.primary }}
        />
      </View>
    );
  };

  const _renderListItem = (item: null) => {
    return (
      <View
        style={{
          minHeight: 80,
          justifyContent: "center",
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: "#dedbdb",
          backgroundColor: "#f9faf9",
          marginRight: 10,
          marginLeft: 10,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Icon name="minus" size={17} style={styles.icon} />
          <Text style={styles.questionText}>{item?.item.question}</Text>
        </TouchableOpacity>
        <Text style={styles.answerText}>{item?.item.answer}</Text>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={faqArr?.length > 0 ? faqArr?.[index]?.questions : []}
        renderItem={_renderListItem}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Footer />}
        ListHeaderComponent={headerView()}
      />
    </View>
  );
}
