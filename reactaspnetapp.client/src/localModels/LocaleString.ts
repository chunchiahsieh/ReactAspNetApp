import { TFunction } from "i18next";

export type LocaleValue = { en: string; zh: string } | string;

export function getLocaleString(value: LocaleValue, t:TFunction, locale: string): string {
  if (isString(value)) {
    return t(value);
  } else if (typeof value === "object" && Object.keys(value).includes(locale)) {
    return value[locale as keyof typeof value];
  } else {
    return `${JSON.stringify(value)} is not a valid locale string.`;
  }
}

function isString(value: any): value is string {
    return typeof value === "string";
  }

