import { Platform } from "react-native";

export const NumericRegex = /^([0-9]{0,100})+$/;

export const AlertTimeOut = Platform.OS === "ios" ? 80 : 0;

export const EmailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const contentSortOptions = [
  { label: "Name", value: "Name" },
  { label: "Recently Updated", value: "Recently Updated" },
  { label: "Least Recently Updated", value: "Least Recently Updated" },
];

export const listSortOptions = [
  { label: "Name", value: "Name" },
  { label: "Recently Updated", value: "Recently Updated" },
  { label: "Least Recently Updated", value: "Least Recently Updated" },
];
