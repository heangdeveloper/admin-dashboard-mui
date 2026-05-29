export const createTypography = (locale: string) => {
    return {
        htmlFontSize: 12,
        fontFamily:
            locale === "kh"
            ? '"Battambang", system-ui'
            : '"Public Sans", sans-serif',
        h1: {
            fontSize: '38px',
            fontWeight: 600,
            lineHeight: 1.21
        },
        h3: {
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: 1.5
        },
        h5: {
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: 1.5
        },
        h6: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: 1.57
        },
        body1: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: 1.57
        },
        body2: {
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: 1.66,
        },
        caption: {
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: 1.66,
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: 1.57,
        }
    }
}