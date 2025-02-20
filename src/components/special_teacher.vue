<template>
  <v-container class="mb-5">
    <v-card class="pa-4">
      <v-card-title class="text-h6 font-weight-bold text-center"
        >แผนผังหน่วยงาน</v-card-title
      >
      <div class="text-center">
        <h3 style="color: #cc0000"><b>ครูพิเศษสอน</b></h3>
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
import img1 from "@/assets/special_teacher/1.jpg";
import img2 from "@/assets/special_teacher/2.jpg";
import img3 from "@/assets/special_teacher/3.jpg";
import img4 from "@/assets/special_teacher/4.jpg";
import img5 from "@/assets/special_teacher/5.jpg";
import img6 from "@/assets/special_teacher/6.jpg";
import img7 from "@/assets/special_teacher/7.jpg";
import img8 from "@/assets/special_teacher/8.jpg";
import img9 from "@/assets/special_teacher/9.jpg";
import img10 from "@/assets/special_teacher/10.png";
import img11 from "@/assets/special_teacher/11.png";
import img12 from "@/assets/special_teacher/12.png";
import img13 from "@/assets/special_teacher/13.png";
import img14 from "@/assets/special_teacher/14.jpg";
import img15 from "@/assets/special_teacher/15.jpg";
import img16 from "@/assets/special_teacher/16.jpg";
import avatar from "@/assets/special_teacher/avatar.png";

</script>
  <script setup>
const admins = [
  {
    name: "นายชลิต จิตอารีย์",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้าอาคารฯ",
    image: img1,
  },
  {
    name: "นายธวัชชัย พิพิทธภัณฑ์",
    position: "ครูพิเศษสอน",
    role: "-",
    image: img2,
  },
  {
    name: "นายเกียรติศักดิ์ โนราช",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้าอาคารฯ",
    image: img3,
  },
  {
    name: "นางสาวทิชานุช เหล่าใหญ่",
    position: "ครูพิเศษสอน",
    role: "หัวหน้างานส่งเสริมผลิตผลฯ",
    image: img4,
  },
  {
    name: "นายตรัณ บัณฑิต",
    position: "ครูพิเศษสอน",
    role: "-",
    image: img5,
  },
  {
    name: "นายอนุชิต  การินทร์",
    position: "ครูพิเศษสอน",
    role: "หัวหน้างานกิจกรรมนักเรียนนักศึกษา",
    image: img6,
  },
  {
    name: "นางสาวเกศแก้ว ใจซื่อดี",
    position: "ครูพิเศษสอน",
    role: "หัวหน้าแผนกเทคนิคพื้นฐาน",
    image: img7,
  },
  {
    name: "นางสาวอภิรดี ปรังฤทธิ์",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้างานทะเบียน",
    image: img8,
  },
  {
    name: "นางสาวทิพาพร ปัญญาภู",
    position: "ครูพิเศษสอน",
    role: "หัวหน้างานวิทยบริการและห้องสมุด",
    image: img9,
  },
  {
    name: "นายศุภวัฒน์  ชราพก",
    position: "ครูพิเศษสอน",
    role: "-",
    image: img10,
  },
  {
    name: "นางสาวนภัสสร แสงทอง",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้างานพัฒนาหลักสูตรการเรียนการสอน",
    image: img11,
  },
  {
    name: "นางสาวปีย์รดา  สอนวงษา",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้างานพัฒนาหลักสูตรการเรียนการสอน",
    image: img12,
  },
  {
    name: "นายเอกพล  อุตรชน",
    position: "ครูพิเศษสอน",
    role: "-",
    image: img13,
  },
  {
    name: "นายณัฐพล  อุปถัมภ์",
    position: "ครูพิเศษสอน",
    role: "-",
    image: avatar,
  },
  {
    name: "นายทศวรรษ  กันฟอง",
    position: "ครูพิเศษสอน",
    role: "-",
    image: avatar,
  },
  {
    name: "นางสาวทิพาพร  ปัญญาภู",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้างานประชาสัมพันธ์",
    image: img14,
  },
  {
    name: "นายธนาวัฒน์  เทพกัน",
    position: "ครูพิเศษสอน",
    role: "-",
    image: avatar,
  },
  {
    name: "นางสาวปรีญาภรณ์  อุตเรือน",
    position: "ครูพิเศษสอน",
    role: "-",
    image: img15,
  },
  {
    name: "นายมานะชัย  วีระวงศ์",
    position: "ครูพิเศษสอน",
    role: "-",
    image: avatar,
  },
  {
    name: "นางสาวรุ่งทิวา  อุดทา",
    position: "ครูพิเศษสอน",
    role: "-",
    image: avatar,
  },
  {
    name: "นางสาววรกมล  สุดสม",
    position: "ครูพิเศษสอน",
    role: "-",
    image: avatar,
  },
  {
    name: "นายวิชัย  จิตอารีย์",
    position: "ครูพิเศษสอน",
    role: "-",
    image: avatar,
  },
  {
    name: "นายวิทูล  อุดอ้าย",
    position: "ครูพิเศษสอน",
    role: "-",
    image: avatar,
  },
  {
    name: "นายศักรนันทน์  ไชยศิลป์",
    position: "ครูพิเศษสอน",
    role: "เจ้าหน้าที่ส่งเสริมผลฯ",
    image: img16,
  },
  {
    name: "นายศุภกร  เชื้อหมอ",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้างานที่ปรึกษา",
    image: avatar,
  },
  {
    name: "นายศุภณัฐ ไชยศิลป์",
    position: "ครูพิเศษสอน",
    role: "-",
    image: avatar,
  },
  {
    name: "นายเสกสรรค์  ไชยศิลป์",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้างานแนะแนว",
    image: avatar,
  },
  {
    name: "นายเสฏฐวุฒิ  ศรีวิกะ",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้างานศูนย์ข้อมูลสารสนเทศ",
    image: avatar,
  },
  {
    name: "นายเอกวัฒน์  เขื่อนธนะ",
    position: "ครูพิเศษสอน",
    role: "-",
    image: avatar,
  },
  {
    name: "นางสาวอรทัย  แรกเรียง",
    position: "ครูพิเศษสอน",
    role: "-",
    image: avatar,
  },
  {
    name: "นายอำนวย  กันศร",
    position: "ครูพิเศษสอน",
    role: "-",
    image: avatar,
  },
  {
    name: "นายเอกรัตน์  อายุยืน",
    position: "ครูพิเศษสอน",
    role: "หัวหน้าสื่อการเรียนการสอน",
    image: avatar,
  },
];
</script>
  
  <style scoped>
.text-center {
  text-align: center;
}
</style>
  