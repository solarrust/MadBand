import { writable, derived, get } from "svelte/store";

export const dict = writable();
export let locale = writable("ru");

const storageLang = localStorage.getItem("MB_lang");

if (storageLang) {
  locale = writable(storageLang);
}

const localizedDict = derived([dict, locale], ([$dict, $locale]) => {
  if (!$dict || !$locale) return;
  return $dict[$locale];
});

const getMessageFromLocalizedDict = (id, localizedDict) => {
  const splitId = id.split(".");
  let message = { ...localizedDict };
  splitId.forEach((partialId) => {
    message = message[partialId];
  });
  return message;
};

const createMessageFormatter = (localizedDict) => (id) =>
  getMessageFromLocalizedDict(id, localizedDict);

export const t = derived(localizedDict, ($localizedDict) => {
  return createMessageFormatter($localizedDict);
});

export const currentLocale = get(locale);
