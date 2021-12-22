import LocalizedStrings from "react-native-localization";

export const localStrings = new LocalizedStrings({
  "tr-TR": {
    noLocationService: "Lokasyon Servisi Kapalı",
    yes: "Evet",
    no: "Hayır",
    cancel: "İptal",
    areYouSure: "Emin misiniz?",
    noInternet: "İnternet Bağlantısı Yok",
  },
  en: {
    noLocationService: "Location Service Not Available",
    yes: "Yes",
    no: "No",
    cancel: "Cancel",
    areYouSure: "Are you sure?",
    noInternet: "No Internet Connection",
  },
});
// ? Set the language manually
localStrings.setLanguage("tr");
