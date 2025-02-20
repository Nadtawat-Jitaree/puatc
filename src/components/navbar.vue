<template>
  <v-container>
    <!-- App Bar -->
    <v-app-bar class="px-3 py-2" color="#db3b7b" density="compact">
      <!-- Logo และชื่อวิทยาลัย -->
      <div class="d-flex align-center">
        <img
          src="https://www.puatc.ac.th/files/10000001_21120216160436.png"
          width="40px"
          alt="logo"
        />
        <a href="/" class="mx-2 text-decoration-none text-white">
          วิทยาลัยเทคนิคปัว
        </a>
      </div>

      <v-spacer></v-spacer>

      <!-- เมนูซ่อนใน Navigation Drawer เมื่อเป็นมือถือ -->
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- เมนูแสดงเมื่อเป็นหน้าจอขนาดใหญ่ -->
      <div class="d-none d-md-flex">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="white">
              ข้อมูลบุลคลกร <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list  style="z-index: 999;">
            <v-list-item
              v-for="(item, index) in AdministratorItems"
              :key="index"
              @click="navigate(item.to)"
            >
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn v-for="(item, index) in menuItems" :key="index" :to="item.to" text>
          {{ item.text }}
        </v-btn>
      </div>
    </v-app-bar>

    <!-- Navigation Drawer สำหรับมือถือ -->
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item
          v-for="(item, index) in AdministratorItems"
          :key="index"
          @click="navigate(item.to)"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.to"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false); // สำหรับ Navigation Drawer

const AdministratorItems = [
  { text: "ข้าราชการ", to: "/official" },
  { text: "พนักงานราชการ", to: "/government_employee" },
  { text: "ครูพิเศษสอน", to: "/special_teacher" },
  { text: "เจ้าหน้าที่", to: "/officer" },
  { text: "นักการภารโรง", to: "/janitor" },
];

const menuItems = [
  { text: "ข้อมูลผู้บริหาร", to: "/Administrator" },
  { text: "ข้อมูลนักเรียน นักศึกษา", to: "/student" },
  { text: "สาขาที่เปิดสอน", to: "/branch" },
];

const navigate = (to) => {
  window.location.href = to;
};
</script>
