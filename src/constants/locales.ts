export const LOCALES = [
    {
        value: "en",
        label: "profile.language.value.english"
    },
    {
        value: "kh",
        label: "profile.language.value.khmer"
    }
] as const;

export type Locale = (typeof LOCALES)[number]["value"];