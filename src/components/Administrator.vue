<template>
    <v-container>
      <v-card class="pa-4">
        <v-card-title class="text-h6 font-weight-bold text-center">ทำเนียบผู้บริหาร</v-card-title>
        <v-row justify="center">
          <v-col cols="12" md="6" class="text-center">
            <v-img :src="admins[0].image" contain height="250"></v-img>
            <h3 class="mt-2 font-weight-bold">{{ admins[0].name }}</h3>
            <p><strong>ตำแหน่ง:</strong> {{ admins[0].position }}</p>
            <p><strong>หน้าที่หลัก:</strong> {{ admins[0].role }}</p>
            <p><strong>เบอร์โทรศัพท์:</strong> {{ admins[0].phone }}</p>
          </v-col>
        </v-row>
  
        <v-row justify="center">
          <v-col v-for="(admin, index) in admins.slice(1)" :key="index" cols="12" md="6" class="text-center">
            <v-img :src="admin.image" contain height="250"></v-img>
            <h3 class="mt-2 font-weight-bold">{{ admin.name }}</h3>
            <p><strong>ตำแหน่ง:</strong> {{ admin.position }}</p>
            <p><strong>หน้าที่หลัก:</strong> {{ admin.role }}</p>
            <p><strong>เบอร์โทรศัพท์:</strong> {{ admin.phone }}</p>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  const admins = [
    {
      name: "นายรชต ดิลกรัชตสกุล",
      position: "ผู้อำนวยการเชี่ยวชาญ วิทยาลัยเทคนิคปัว",
      role: "ผู้อำนวยการ",
      phone: "0823398295",
      image: "https://www.puatc.ac.th//files/10000001_23100215152918.png", // แทนที่ด้วย URL รูปจริง
    },
    {
      name: "นางฐิติกันต์ จันทร์เจียม",
      position: "รองผู้อำนวยการวิทยาลัยเทคนิคปัว",
      role: "รองผู้อำนวยการฝ่ายพัฒนากิจการนักเรียน นักศึกษา",
      phone: "085-716-8707",
      image: "https://www.puatc.ac.th//files/10000001_23100215154609.png",
    },
    {
      name: "นายจตุรนต์ แสนโซ้ง",
      position: "รองผู้อำนวยการวิทยาลัยเทคนิคปัว",
      role: "รองผู้อำนวยการฝ่ายบริหารทรัพยากร",
      phone: "097-971-7556",
      image: "http://puatc.ac.th/files/10000001_2112020993232.jpg",
    },
    {
      name: "นายณัฏฐกิตติ์ สีนวลเขียว",
      position: "รองผู้อำนวยการวิทยาลัยเทคนิคปัว",
      role: "รองผู้อำนวยการฝ่ายวิชาการ",
      phone: "084-367-1942",
      image: "https://www.puatc.ac.th//files/10000001_2402070885801.png",
    },
    {
      name: "นายไชย จักรอะโน",
      position: "รองผู้อำนวยการวิทยาลัยเทคนิคปัว",
      role: "รองผู้อำนวยการฝ่ายแผนงานและความร่วมมือ",
      phone: "083-567-2878",
      image: "http://puatc.ac.th/files/10000001_2112020995644.jpg",
    },
  ];
  </script>
  
  <style scoped>
  .text-center {
    text-align: center;
  }
  </style>
  