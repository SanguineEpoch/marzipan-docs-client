/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { marzipanLight, marzipanDark } from "@/styles/theme";
// Composables
import { createVuetify } from "vuetify";

export default createVuetify({
  defaults: {
    global: {
      density: "default",
    },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: marzipanLight,
      dark: marzipanDark,
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
