import React, { Component } from "react";
import styles from "./GuestServicesScreen.style";
import BorderView from "../../shared/components/border-view/borderView";
import { Image, ScrollView, View, TextInput, Text } from "react-native";
import Header from "../../shared/components/header/header";
import { textKey } from "../../shared/constants/texts.constants";
import Button from "../../shared/components/button/button";
import Footer from "../../shared/components/footer/footer";
import Icon from "react-native-vector-icons/EvilIcons";

import { ImageGallery } from "../../shared/constants/images.constants";

const buttonText = "";
const tempArr = [
  {
    name: textKey.AccessibleServ,
    image: ImageGallery.accessible,
  },
  {
    name: textKey.Accommodation,
    image: ImageGallery.accomodations,
  },
  {
    name: textKey.ClearBag,
    image: ImageGallery.bag,
  },
  {
    name: textKey.SmokeFree,
    image: ImageGallery.smokeFree,
  },
];
export default class GuestServicesScreen extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header headerText={textKey.GuestHeader} />
        <BorderView
          styleProps={{
            alignSelf: "center",
          }}
          childComp={
            <>
              <Text style={styles.subTitleText}>{textKey.GuestSubHeader}</Text>
              <View style={styles.searchContainer}>
                <Icon name="search" size={25} style={styles.iconGlass} />
                <Button buttonText={buttonText} style={styles.buttonWhite} />
              </View>
              <Button
                buttonText={textKey.SearchButton}
                style={styles.buttonPink}
              />
              <Button
                buttonText={textKey.GoToFaqButton}
                style={styles.buttonBlue}
              />
            </>
          }
        />
        {tempArr.map((item) => (
          <BorderView
            styleProps={{ alignSelf: "center" }}
            childComp={
              <>
                <Image
                  style={{
                    alignSelf: "center",
                    marginBottom: 10,
                  }}
                  source={item.image}
                />
                <Text style={styles.boxTitleText}>{item.name}</Text>
              </>
            }
          />
        ))}
        <BorderView
          styleProps={{ alignSelf: "center" }}
          childComp={
            <>
              <Text style={styles.subTitleText}>{textKey.LostAndFound}</Text>
              <Text style={styles.textDescription}>
                {textKey.LostSomethingDesc}
              </Text>
              <Text style={styles.text}>{textKey.LostItem} *</Text>
              <TextInput autoCorrect={false} style={styles.textInput} />
              <Text style={styles.text}>{textKey.Description}</Text>
              <View style={styles.textAreaContainer}>
                <TextInput
                  style={styles.textArea}
                  underlineColorAndroid="transparent"
                  numberOfLines={10}
                  multiline={true}
                />
              </View>
              <Text style={styles.text}>{textKey.Name} *</Text>
              <TextInput autoCorrect={false} style={styles.textInput} />
              <Text style={styles.text}>{textKey.PhoneNu} *</Text>
              <TextInput
                autoCorrect={false}
                keyboardType={"phone-pad"}
                style={styles.textInput}
              />
              <Text style={styles.text}>{textKey.Email} *</Text>
              <TextInput
                autoCorrect={false}
                keyboardType={"email-address"}
                style={styles.textInput}
              />
              <Button buttonText={textKey.Submit} style={styles.submitButton} />
            </>
          }
        />
        <Footer />
      </ScrollView>
    );
  }
}
