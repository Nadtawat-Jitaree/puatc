<template>
    <v-container>
      <v-card class="pa-4">
        <v-card-title class="text-h6 font-weight-bold text-center">แผนผังหน่วยงาน</v-card-title>
        <div class="text-center">
          <h3 style="color: #cc0000;"><b>พนักงานราชการ</b></h3>
        </div>
        <v-row justify="center">
          <v-col v-for="(admin, index) in admins.slice(0)" :key="index" cols="12" md="4" class="text-center">
            <v-img :src="admin.image" contain height="250"></v-img>
            <h3 class="mt-2 font-weight-bold">{{ admin.name }}</h3>
            <p><strong>ตำแหน่ง:</strong> {{ admin.position }}</p>
            <p><strong>หน้าที่หลัก:</strong> {{ admin.role }}</p>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  const admins = [
    {
      name: "นายจำนงค์ ไชยปรุง",
      position: "พนักงานราชการ",
      role: "หัวหน้าแผนกวิชาสามัญสัมพันธ์",
      image: "http://puatc.ac.th//files/10000001_21120911114320.jpg",
    },
    {
      name: "นายสมเดช เนตรทิพย์",
      position: "พนักงานราชการ",
      role: "หัวหน้างานโครงการพิเศษและบริการชุมชน",
      image: "http://puatc.ac.th//files/10000001_21120810103458.jpg",
    },
    {
      name: "นายธีรเกียรติ ทีฆาวงค์",
      position: "พนักงานราชการ",
      role: "หัวหน้างานครูที่ปรึกษา",
      image: "http://puatc.ac.th//files/10000001_21120911114322.jpg",
    },
    {
      name: "นายธรรมสรณ์ ยาใจ",
      position: "พนักงานราชการ",
      role: "-",
      image: "https://www.puatc.ac.th//files/10000001_23071114143400.jpg",
    },
    {
      name: "นายวรภพ การินทร์",
      position: "พนักงานราชการ",
      role: "หัวหน้างานอาคารสถานที่",
      image: "http://puatc.ac.th//files/10000001_21121314142033.jpg",
    },
    {
      name: "นางนุชรีย์  ไชยวงศ์",
      position: "พนักงานราชการ",
      role: "หัวหน้างานบริหารงานทั่วไป",
      image: "http://puatc.ac.th//files/10000001_22010614143312.jpg",
    },
    {
      name: "นายกษิดิ์เดช กันอินทร์",
      position: "พนักงานราชการ",
      role: "หัวหน้างานกิจกรรมนักเรียนนักศึกษา",
      image: "http://puatc.ac.th//files/10000001_21120810103258.jpg",
    },
    {
      name: "นางสาวพิมพ์สุดาพร แก้วเทพ",
      position: "พนักงานราชการ",
      role: "หัวหน้าแผนกวิชาบัญชี",
      image: "http://puatc.ac.th//files/10000001_22010614144220.jpg",
    },
    {
      name: "นายอานุภาพ พุฒหมื่น",
      position: "พนักงานราชการ",
      role: "หัวหน้างานวิจัย พัฒนาฯ",
      image: "http://puatc.ac.th//files/10000001_21120815154719.jpg",
    },
    {
      name: "นายประสพโชค ทวิชาชาติ",
      position: "พนักงานราชการ",
      role: "หัวหน้างานความร่วมมือ",
      image: "http://puatc.ac.th//files/10000001_21120811111830.jpg",
    },
    {
      name: "นางสาวดรุณี บุญเทพ",
      position: "พนักงานราชการ",
      role: "หัวหน้างานการบัญชี",
      image: "http://puatc.ac.th//files/10000001_22010614143309.jpg",
    },
    {
      name: "นายนิวัฒน์ วรรณสมพร",
      position: "พนักงานราชการ",
      role: "หัวหน้างานอาชีวศึกษาระบบทวิภาคี",
      image: "http://puatc.ac.th//files/10000001_21120810103430.jpg",
    },
    {
      name: "นายนิรุตติ์ มัณฑก",
      position: "พนักงานราชการ",
      role: "-",
      image: "http://puatc.ac.th//files/10000001_21120811111831.jpg",
    },
    {
      name: "นายเสกสรรค์ ยอดภักดี",
      position: "พนักงานราชการ",
      role: "-",
      image: "http://puatc.ac.th//files/10000001_21120811110512.jpg",
    },
    {
      name: "นายสุพจน์ อินทะรังษี",
      position: "พนักงานราชการ",
      role: "ผู้ช่วยหัวหน้างานอาชีวศึกษาระบบทวิภาคี",
      image: "http://puatc.ac.th/files/10000001_21120811111828.jpg",
    },
    {
      name: "นางสาวนวพร สีขวา",
      position: "พนักงานราชการ",
      role: "หัวหน้างานประกันคุณภาพและมาตรฐานฯ",
      image: "http://puatc.ac.th//files/10000001_22010614143310.jpg",
    },
    {
      name: "นายกิตติ ไชยวงศ์",
      position: "พนักงานราชการ",
      role: "หัวหน้างานงานศูนย์ข้อมูลฯ",
      image: "http://puatc.ac.th/files/10000001_21120910104155.jpg",
    },
    {
      name: "นายณัฐพัชร์ ไชยศิลป์",
      position: "พนักงานราชการ",
      role: "หัวหน้างานสวัสดิการนักเรียนนักศึกษา",
      image: "http://puatc.ac.th//files/10000001_21120910104159.jpg",
    },
  ];
  </script>
  
  <style scoped>
  .text-center {
    text-align: center;
  }
  </style>
  