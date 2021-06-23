<template>
  <div>
    <v-app-bar
      color="#f5f5f5"
      dense
      dark
      style="height: 70px; padding: 10px 0px"
      id="appbar-res"
    >
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="10" class="d-flex">
          <v-btn color="#f2b334" id="hide-menu">
            <v-icon>{{ icons.mdiMenu }}</v-icon>
          </v-btn>
          <v-menu left bottom class="logo-company">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-btn v-bind="attrs" v-on="on" color="#f2b334">
                <h5>Eztek Company</h5>
                <div class="px-2"></div>
                <v-icon>{{ icons.mdiArrowDownDropCircle }}</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="() => {}">
                <v-list-item-title>
                  Eztek Company
                  <v-divider />
                  Company List
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn color="#f2b334" id="appear-option">
            <v-icon>{{ icons.mdiDotsHorizontal }}</v-icon>
          </v-btn>
          <a href="" class="contact-us">Contact Us</a>
          <div class="mx-1"></div>
          <v-menu left bottom id="hide-option">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-btn
                v-bind="attrs"
                v-on="on"
                color="#f2b334"
                id="hide-option"
              >
                <h5 v-for="user in listUser" :key="user">{{ user.name }}</h5>
                <div class="px-1"></div>
                <v-icon>{{ icons.mdiAccount }}</v-icon>
                <div class="px-1"></div>
                <v-icon>{{ icons.mdiArrowDownDropCircle }}</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="list in listMenu"
                :key="list"
                @click="() => {}"
              >
                <v-list-item-title>{{ list }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <div class="mx-1"></div>
          <v-btn color="#f2b334" id="hide-option">
            <v-icon>{{ icons.mdiLogoutVariant }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>
<script>
import {
  mdiAccount,
  mdiArrowDownDropCircle,
  mdiLogoutVariant,
  mdiMenu,
  mdiDotsHorizontal,
} from "@mdi/js";

export default {
  data: () => ({
    listUser: [
      {
        name: "Thành",
        age: "23",
        email: "vanthanhnguy2907@gmail.com",
      },
    ],
    listMenu: ["Profile", "Event log"],
    icons: {
      mdiAccount,
      mdiArrowDownDropCircle,
      mdiLogoutVariant,
      mdiMenu,
      mdiDotsHorizontal,
    },
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
  }),
};
</script>
<style>
.v-breadcrumbs__item {
  font-weight: 500;
  color: #1f2933 !important;
  font-size: 1rem;
}
.v-breadcrumbs__divider {
  font-weight: 500;
  color: #1f2933 !important;
}
.flag {
  width: 45px;
  height: auto;
}
.contact-us {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
}

#hide-menu {
  display: none;
}
#appear-option {
  display: none;
}
@media only screen and (max-width: 739px) {
  #hide-menu {
    display: block;
    margin-right: 10px;
  }
  #hide-option {
    display: none;
  }
  #appear-option {
    display: block;
    margin-right: -20px;
  }
  .contact-us {
    display: none;
  }
  .v-btn {
    min-width: 0px !important;
  }
  #appbar-res {
    width: 100%;
  }
}
</style>
