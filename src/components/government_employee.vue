<template>
  <v-container class="mb-5">
    <v-card class="pa-4">
      <v-card-title class="text-h6 font-weight-bold text-center"
        >แผนผังหน่วยงาน</v-card-title
      >
      <div class="text-center">
        <h3 style="color: #cc0000"><b>พนักงานราชการ</b></h3>
      </div>
      <v-row justify="center">
        <v-col
          v-for="(admin, index) in admins.slice(0)"
          :key="index"
          cols="12"
          md="4"
          class="text-center"
        >
          <v-img :src="admin.image" contain height="250"></v-img>
          <h3 class="mt-2 font-weight-bold">{{ admin.name }}</h3>
          <p><strong>ตำแหน่ง:</strong> {{ admin.position }}</p>
          <p><strong>หน้าที่หลัก:</strong> {{ admin.role }}</p>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import img1 from "@/assets/government_employee/1.jpg";
import img2 from "@/assets/government_employee/2.jpg";
import img3 from "@/assets/government_employee/3.jpg";
import img4 from "@/assets/government_employee/4.jpg";
import img5 from "@/assets/government_employee/5.jpg";
import img6 from "@/assets/government_employee/6.jpg";
import img7 from "@/assets/government_employee/7.jpg";
import img8 from "@/assets/government_employee/8.jpg";
import img9 from "@/assets/government_employee/9.jpg";
import img10 from "@/assets/government_employee/10.jpg";
import img11 from "@/assets/government_employee/11.jpg";
import img12 from "@/assets/government_employee/12.jpg";
import img13 from "@/assets/government_employee/13.jpg";
import img14 from "@/assets/government_employee/14.jpg";
import img15 from "@/assets/government_employee/15.jpg";
import img16 from "@/assets/government_employee/16.jpg";
import img17 from "@/assets/government_employee/17.jpg";
import img18 from "@/assets/government_employee/18.jpg";
</script>
  <script setup>
const admins = [
  {
    name: "นายจำนงค์ ไชยปรุง",
    position: "พนักงานราชการ",
    role: "หัวหน้าแผนกวิชาสามัญสัมพันธ์",
    image: img1,
  },
  {
    name: "นายสมเดช เนตรทิพย์",
    position: "พนักงานราชการ",
    role: "หัวหน้างานโครงการพิเศษและบริการชุมชน",
    image: img2,
  },
  {
    name: "นายธีรเกียรติ ทีฆาวงค์",
    position: "พนักงานราชการ",
    role: "หัวหน้างานครูที่ปรึกษา",
    image: img3,
  },
  {
    name: "นายธรรมสรณ์ ยาใจ",
    position: "พนักงานราชการ",
    role: "-",
    image: img4,
  },
  {
    name: "นายวรภพ การินทร์",
    position: "พนักงานราชการ",
    role: "หัวหน้างานอาคารสถานที่",
    image: img5,
  },
  {
    name: "นางนุชรีย์  ไชยวงศ์",
    position: "พนักงานราชการ",
    role: "หัวหน้างานบริหารงานทั่วไป",
    image: img6,
  },
  {
    name: "นายกษิดิ์เดช กันอินทร์",
    position: "พนักงานราชการ",
    role: "หัวหน้างานกิจกรรมนักเรียนนักศึกษา",
    image: img7,
  },
  {
    name: "นางสาวพิมพ์สุดาพร แก้วเทพ",
    position: "พนักงานราชการ",
    role: "หัวหน้าแผนกวิชาบัญชี",
    image: img8,
  },
  {
    name: "นายอานุภาพ พุฒหมื่น",
    position: "พนักงานราชการ",
    role: "หัวหน้างานวิจัย พัฒนาฯ",
    image: img9,
  },
  {
    name: "นายประสพโชค ทวิชาชาติ",
    position: "พนักงานราชการ",
    role: "หัวหน้างานความร่วมมือ",
    image: img10,
  },
  {
    name: "นางสาวดรุณี บุญเทพ",
    position: "พนักงานราชการ",
    role: "หัวหน้างานการบัญชี",
    image: img11,
  },
  {
    name: "นายนิวัฒน์ วรรณสมพร",
    position: "พนักงานราชการ",
    role: "หัวหน้างานอาชีวศึกษาระบบทวิภาคี",
    image: img12,
  },
  {
    name: "นายนิรุตติ์ มัณฑก",
    position: "พนักงานราชการ",
    role: "-",
    image: img13,
  },
  {
    name: "นายเสกสรรค์ ยอดภักดี",
    position: "พนักงานราชการ",
    role: "-",
    image: img14,
  },
  {
    name: "นายสุพจน์ อินทะรังษี",
    position: "พนักงานราชการ",
    role: "ผู้ช่วยหัวหน้างานอาชีวศึกษาระบบทวิภาคี",
    image: img15,
  },
  {
    name: "นางสาวนวพร สีขวา",
    position: "พนักงานราชการ",
    role: "หัวหน้างานประกันคุณภาพและมาตรฐานฯ",
    image: img16,
  },
  {
    name: "นายกิตติ ไชยวงศ์",
    position: "พนักงานราชการ",
    role: "หัวหน้างานงานศูนย์ข้อมูลฯ",
    image: img17,
  },
  {
    name: "นายณัฐพัชร์ ไชยศิลป์",
    position: "พนักงานราชการ",
    role: "หัวหน้างานสวัสดิการนักเรียนนักศึกษา",
    image: img18,
  },
];
</script>
  
  <style scoped>
.text-center {
  text-align: center;
}
</style>
  