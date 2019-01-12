import "./style/theme.scss";
import StaticPageLayout from "./layouts/StaticPage";
import DefaultMenu from "./components/DefaultMenu";

export default {
    layouts: [
        {
            name: "static",
            title: "Static page layout",
            component: StaticPageLayout
        }
    ],
    fonts: {
        google: {
            families: ["IBM Plex Sans:400,500,700", "Lato:400,500,700"]
        }
    },
    colors: {
        primary: "var(--webiny-cms-theme-primary)",
        secondary: "var(--webiny-cms-theme-secondary)",
        background: "var(--webiny-cms-theme-background)",
        surface: "var(--webiny-cms-theme-surface)",
        textPrimary: "var(--webiny-cms-theme-text-primary)"
    },
    components: {
        menu: [
            {
                name: "default",
                component: DefaultMenu
            }
        ]
    },
    elements: {
        button: {
            types: [{ className: "", label: "Default" }, { className: "primary", label: "Primary" }]
        }
    },
    typography: {
        h1: {
            label: "Heading 1",
            component: "h1",
            className: "webiny-cms-typography-h1"
        },
        h2: {
            label: "Heading 2",
            component: "h2",
            className: "webiny-cms-typography-h2"
        },
        h3: {
            label: "Heading 3",
            component: "h3",
            className: "webiny-cms-typography-h3"
        },
        paragraph: {
            label: "Paragraph",
            component: "p",
            className: "webiny-cms-typography-body"
        }
    }
};
