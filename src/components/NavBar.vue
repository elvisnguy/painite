<template>
  <v-navigation-drawer
    id="app-drawer"
    color="rgb(79,37,102)"
    floating
    persistent
    mobile-break-point="991"
    width="210"
    absolute
  >
    <v-img :src="image" height="100%">
      <v-layout class="fill-height" tag="v-list" column>
        <v-divider />
        <div class="mt-16"></div>

        <router-link
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="list-item"
          style="color: #c8cde2; font-weight: 400; font-size: 18px"
        >
          <v-list-title class="hover-lt">
            <v-list-title-action>
              <v-icon
                style="color: #c8cde2; font-size: 35px; padding-right: 12px"
                >{{ link.icon }}</v-icon
              >
            </v-list-title-action>
            <v-list-title-title v-text="link.text" />
          </v-list-title>
        </router-link>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    links: [
      {
        to: "/dashboard",
        icon: "mdi-view-dashboard",
        text: "Dashboard",
      },
      {
        to: "companies/{{companyId}}/sales/",
        icon: "mdi-currency-usd",
        text: "Sales",
      },
      {
        to: "companies/{{companyId}}/contacts/",
        icon: "mdi-domain",
        text: "Contacts",
      },
      {
        to: "companies/{{companyId}}/products/",
        icon: "mdi-cube-outline",
        text: "Products",
      },
      {
        to: "companies/{{companyId}}/fees/",
        icon: "mdi-calculator-variant-outline",
        text: "Fees",
      },
      {
        to: "companies/{{companyId}}/employees/",
        icon: "mdi-account-supervisor",
        text: "Employees",
      },
      {
        to: "companies/{{companyId}}/setting/",
        icon: "mdi-cog",
        text: "Company setting",
      },
    ],
  }),
};
</script>
<style>
.hover-lt :hover {
  color: #e7ac28;
}
.list-item {
  align-items: center;
  display: flex;
  padding: 18px 10px;
  position: relative;
  text-decoration: none;
}

</style>
