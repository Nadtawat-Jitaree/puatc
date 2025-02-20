<template>
  <v-container class="mb-5">
    <v-card class="pa-4">
      <v-card-title class="text-h6 font-weight-bold text-center"
        >แผนผังหน่วยงาน</v-card-title
      >
      <div class="text-center">
        <h3 style="color: #cc0000"><b>เจ้าหน้าที่</b></h3>
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
import img1 from "@/assets/officer/1.jpg";
import img2 from "@/assets/officer/2.jpg";
import img3 from "@/assets/officer/3.jpg";
import img4 from "@/assets/officer/4.jpg";
import img5 from "@/assets/officer/5.jpg";
import img6 from "@/assets/officer/6.jpg";
import img7 from "@/assets/officer/7.jpg";
import img8 from "@/assets/officer/8.png";
import img9 from "@/assets/officer/9.png";
import img10 from "@/assets/officer/10.png";
import img11 from "@/assets/officer/11.png";
import img12 from "@/assets/officer/12.png";
import avatar from "@/assets/officer/avatar.png";

</script>
  <script setup>
const admins = [
  {
    name: "นายวัตพงค์ บุญเทพ",
    position: "เจ้าหน้าที่",
    role: "หัวหน้างานแนะแนวอาชีพและการจัดหางาน",
    image: img1,
  },
  {
    name: "นางสาวอารียา จิตอารีย์",
    position: "เจ้าหน้าที่",
    role: "งานทะเบียน",
    image: img2,
  },
  {
    name: "นางสุดารัตน์ สมบัติกำไร",
    position: "เจ้าหน้าที่",
    role: "งานกิจกรรมนักเรียนนักศึกษา",
    image: img3,
  },
  {
    name: "นายศรีศักดิ์ อาภรณ์ศิริ",
    position: "เจ้าหน้าที่",
    role: "พนักงานขับรถ",
    image: img4,
  },
  {
    name: "นายจตุพล ระขะไพ",
    position: "เจ้าหน้าที่",
    role: "พนักงานขับรถ",
    image: img5,
  },
  {
    name: "นางสาวมัทนา  ยาปัน",
    position: "เจ้าหน้าที่",
    role: "งานอาคารสถานที่",
    image: img6,
  },
  {
    name: "นางสาวภัทยา ธัญญะ",
    position: "เจ้าหน้าที่",
    role: "งานบุคลากร",
    image: img7,
  },
  {
    name: "นางสาวนัทธมน  มูลคำ",
    position: "เจ้าหน้าที่",
    role: "งานส่งเสริมผลิตผลการค้า",
    image: img8,
  },
  {
    name: "นางสาวปรัชญา  วรรณโกฏิ",
    position: "เจ้าหน้าที่",
    role: "งานสารบรรณ",
    image: img9,
  },
  {
    name: "นางสาวกุลณัฐ  ชนาภิมุข",
    position: "เจ้าหน้าที่",
    role: "งานวัดผลและประเมินผล",
    image: img10,
  },
  {
    name: "นางภัทรานิษฐ์  ชุ่มเย็น",
    position: "เจ้าหน้าที่",
    role: "งานสวัสดิการ(จำนานคูปองฯ)",
    image: img11,
  },
  {
    name: "นายวีรพงษ์  อุ่มมี",
    position: "เจ้าหน้าที่",
    role: "งานศูนย์ข้อมูลสารสนเทศ",
    image: img12,
  },
  {
    name: "นายพงษ์พิสุทธิ์ ฑีฆาวงศ์",
    position: "เจ้าหน้าที่",
    role: "งานประชาสัมพันธ์",
    image: avatar,
  },
];
</script>
  
  <style scoped>
.text-center {
  text-align: center;
}
</style>
  