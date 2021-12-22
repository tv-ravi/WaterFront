import React, { Component } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import styles from "./ContactScreen.style";
import Footer from "../../shared/components/footer/footer";
import Header from "../../shared/components/header/header";
import BorderView from "../../shared/components/border-view/borderView";
import { textKey } from "../../shared/constants/texts.constants";
import Button from "../../shared/components/button/button";
import { ImageGallery } from "../../shared/constants/images.constants";

export default class ContactScreen extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header headerText={"CONTACT WATERFRONT CONCERTS"} />
        <BorderView
          styleProps={styles.container}
          childComp={
            <>
              <Text style={styles.text}>{textKey.YourName} </Text>
              <TextInput autoCorrect={false} style={styles.textInput} />
              <Text style={styles.text}>{textKey.YourEmail} </Text>
              <TextInput autoCorrect={false} style={styles.textInput} />
              <Text style={styles.text}>{textKey.Subject} </Text>
              <TextInput autoCorrect={false} style={styles.textInput} />
              <Text style={styles.text}>{textKey.Message} </Text>
              <TextInput autoCorrect={false} style={styles.textInput} />
              <Button buttonText={textKey.Submit} style={styles.submitButton} />
            </>
          }
        />
        <BorderView
          styleProps={styles.container}
          childComp={
            <>
              <Text style={styles.subTitleText}>{textKey.ContactSubTitle}</Text>
              <Text style={styles.textDescription}>{textKey.ContactDescr}</Text>
            </>
          }
        />
        <BorderView
          styleProps={styles.container}
          childComp={
            <>
              <Text style={styles.subTitleText}>{textKey.SocialMedia}</Text>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Image
                  style={styles.mediaIcon}
                  source={ImageGallery.fbBlueIcon}
                />
                <Text style={styles.underlineText}>{textKey.Facebook}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={styles.mediaIcon}
                  source={ImageGallery.twitterBlueIcon}
                />
                <Text style={styles.underlineText}>{textKey.Twitter}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={styles.mediaIcon}
                  source={ImageGallery.youtubBlueIcon}
                />
                <Text style={styles.underlineText}>{textKey.Youtube}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={styles.mediaIcon}
                  source={ImageGallery.instaBlueIcon}
                />
                <Text style={styles.underlineText}>{textKey.Instagram}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={styles.mediaIcon}
                  source={ImageGallery.snapBlueIcon}
                />
                <Text style={styles.underlineText}>{textKey.Snapchat}</Text>
              </View>
            </>
          }
        />
        <BorderView
          styleProps={styles.container}
          childComp={
            <>
              <Text style={styles.subTitleText}>{textKey.PhoneNus}</Text>
              <Text style={styles.subHeadingText}>{textKey.Address1}</Text>
              <View style={{ flexDirection: "row", marginLeft: 25 }}>
                <Text style={styles.textRegular}>Call </Text>
                <Text style={styles.underlineText}>{textKey.phoneNumber1}</Text>
                <Text style={styles.textRegular}> (Toll Free) </Text>
              </View>
              <Text style={[styles.subHeadingText, { marginTop: 15 }]}>
                {textKey.Address2}
              </Text>
              <View style={{ flexDirection: "row", marginLeft: 25 }}>
                <Text style={styles.textRegular}>Call </Text>
                <Text style={styles.underlineText}>{textKey.phoneNumber2}</Text>
              </View>
              <Text style={[styles.subHeadingText, { marginTop: 15 }]}>
                {textKey.Fax}
              </Text>
              <View style={{ flexDirection: "row", marginLeft: 25 }}>
                <Text style={styles.textRegular}>Send </Text>
                <Text style={styles.underlineText}>{textKey.FaxNu}</Text>
              </View>
            </>
          }
        />
        <BorderView
          styleProps={styles.container}
          childComp={
            <>
              <Text style={styles.subTitleText}>{textKey.Emails}</Text>
              <Text style={styles.subHeadingText}>{textKey.Name1}</Text>
              <Text style={[styles.underlineText, styles.alignStartText]}>
                {textKey.Email1}
              </Text>
              <Text style={[styles.subHeadingText, { marginTop: 15 }]}>
                {textKey.Name2}
              </Text>
              <Text style={[styles.underlineText, styles.alignStartText]}>
                {textKey.Email2}
              </Text>
              <Text style={[styles.subHeadingText, { marginTop: 15 }]}>
                {textKey.Name3}
              </Text>
              <Text style={[styles.underlineText, styles.alignStartText]}>
                {textKey.Email3}
              </Text>
              <Text style={[styles.subHeadingText, { marginTop: 15 }]}>
                {textKey.Name4}
              </Text>
              <Text style={[styles.underlineText, styles.alignStartText]}>
                {textKey.Email4}
              </Text>
              <Text style={[styles.subHeadingText, { marginTop: 15 }]}>
                {textKey.Name5}
              </Text>
              <Text style={[styles.underlineText, styles.alignStartText]}>
                {textKey.Email5}
              </Text>
              <Text style={[styles.subHeadingText, { marginTop: 15 }]}>
                {textKey.Name6}
              </Text>
              <Text style={[styles.underlineText, styles.alignStartText]}>
                {textKey.Email6}
              </Text>
              <Text style={[styles.subHeadingText, { marginTop: 15 }]}>
                {textKey.Name7}
              </Text>
              <Text style={[styles.underlineText, styles.alignStartText]}>
                {textKey.Email7}
              </Text>
              <Text style={[styles.subHeadingText, { marginTop: 15 }]}>
                {textKey.Name8}
              </Text>
              <Text style={[styles.underlineText, styles.alignStartText]}>
                {textKey.Email8}
              </Text>
            </>
          }
        />
        <Footer />
      </ScrollView>
    );
  }
}
