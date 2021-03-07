import Vue from "vue";
import AdminLayout from "@/layouts/Admin";
import TermsConditions from "@/views/terms-conditions";
import ListSpecies from "@/views/species/List";
import ListBreeds from "@/views/breeds/List";
import ListPetCare from "@/views/petcares/List";
import Dashboard from "@/views/Dashboard";
import Error from "@/views/Error";
import i18n from "@/i18n";

/**
 * Error component
 */
Vue.component("Error", Error);

export default {
  path: "",
  component: AdminLayout,
  meta: {
    title: i18n.t("routes.home")
  },
  children: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        title: i18n.t("routes.dashboard")
      }
    },
    {
      path: "/terms-conditions",
      name: "terms-conditions",
      component: TermsConditions,
      meta: {
        title: i18n.t("routes.terms_conditions")
      }
    },
    {
      path: "/species",
      name: "species",
      component: ListSpecies,
      meta: {
        title: "Especies"
      }
    },
    {
      path: "/species/breeds",
      name: "breeds",
      component: ListBreeds,
      meta: {
        title: "Razas"
      }
    },
    {
      path: "/pet-care",
      name: "petcares",
      component: ListPetCare,
      meta: {
        title: "Cuidados"
      }
    },
    {
      path: "*",
      component: Error,
      meta: {
        title: i18n.t("routes.not_found")
      }
    }
  ]
};
