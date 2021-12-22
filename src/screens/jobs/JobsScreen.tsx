import React, { useEffect, useState } from "react";
import { ScrollView, PixelRatio } from "react-native";
//import styles from "./JobsScreen.style";
import Header from "../../shared/components/header/header";
import Footer from "../../shared/components/footer/footer";
import { apiHelper } from "../../services/api";
import { WebView, WebViewMessageEvent } from "react-native-webview";

export default function JobsScreen(): React.ReactElement {
  const [webContent, setWebContent] = useState("");
  const [contentHeight, setContentHeight] = useState(0);
  useEffect(() => {
    const slug = "jobs"; // "redeem-flex-pass"
    apiHelper
      .fetchGetApi(
        apiHelper.apiUrlEndPoints.ticketSubMenuDetail + "?slug=" + slug,
      )
      .then((res) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setWebContent(res.data.content);
      })
      .catch((err) => {
        console.error("Fetch banner Error: ", err);
      });
  }, []);
  const onWebViewMessage = (event: WebViewMessageEvent) => {
    setContentHeight(Number(event.nativeEvent.data) / PixelRatio.get());
    // this.setState({ webViewHeight: Number(event.nativeEvent.data) });
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header headerText={"JOBS"} />
      <WebView
        style={{ height: contentHeight + 70 }}
        source={{ html: webContent }}
        onMessage={onWebViewMessage}
        injectedJavaScript="window.ReactNativeWebView.postMessage(document.body.scrollHeight)"
        originWhitelist={["*"]}
        javaScriptEnabled={false}
        scalesPageToFit={true}
      />
      <Footer />
    </ScrollView>
  );
}
