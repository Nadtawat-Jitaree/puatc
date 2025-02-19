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
  
  <script setup>
const admins = [
  {
    name: "นายชลิต จิตอารีย์",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้าอาคารฯ",
    image: "http://puatc.ac.th//files/10000001_21120815155244.jpg",
  },
  {
    name: "นายธวัชชัย พิพิทธภัณฑ์",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "http://puatc.ac.th//files/10000001_21120811111835.jpg",
  },
  {
    name: "นายเกียรติศักดิ์ โนราช",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้าอาคารฯ",
    image: "http://puatc.ac.th//files/10000001_21120815155019.jpg",
  },
  {
    name: "นางสาวทิชานุช เหล่าใหญ่",
    position: "ครูพิเศษสอน",
    role: "หัวหน้างานส่งเสริมผลิตผลฯ",
    image: "http://puatc.ac.th//files/10000001_21121416162945.jpg",
  },
  {
    name: "นายตรัณ บัณฑิต",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "http://puatc.ac.th//files/10000001_21120911114323.jpg",
  },
  {
    name: "นายอนุชิต  การินทร์",
    position: "ครูพิเศษสอน",
    role: "หัวหน้างานกิจกรรมนักเรียนนักศึกษา",
    image: "https://www.puatc.ac.th//files/10000001_2307130885310.jpg",
  },
  {
    name: "นางสาวเกศแก้ว ใจซื่อดี",
    position: "ครูพิเศษสอน",
    role: "หัวหน้าแผนกเทคนิคพื้นฐาน",
    image: "http://puatc.ac.th//files/10000001_21121314142518.jpg",
  },
  {
    name: "นางสาวอภิรดี ปรังฤทธิ์",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้างานทะเบียน",
    image: "http://puatc.ac.th//files/10000001_21121315151210.jpg",
  },
  {
    name: "นางสาวทิพาพร ปัญญาภู",
    position: "ครูพิเศษสอน",
    role: "หัวหน้างานวิทยบริการและห้องสมุด",
    image: "http://puatc.ac.th//files/10000001_21120911114326.jpg",
  },
  {
    name: "นายศุภวัฒน์  ชราพก",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "http://puatc.ac.th//files/10000001_23070510103328.png",
  },
  {
    name: "นางสาวนภัสสร แสงทอง",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้างานพัฒนาหลักสูตรการเรียนการสอน",
    image: "http://puatc.ac.th//files/10000001_2307050994638.pngs",
  },
  {
    name: "นางสาวปีย์รดา  สอนวงษา",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้างานพัฒนาหลักสูตรการเรียนการสอน",
    image: "https://www.puatc.ac.th//files/10000001_2309260884038.png",
  },
  {
    name: "นายเอกพล  อุตรชน",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "http://puatc.ac.th//files/10000001_23070510103449.png",
  },
  {
    name: "นายณัฐพล  อุปถัมภ์",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นายทศวรรษ  กันฟอง",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นางสาวทิพาพร  ปัญญาภู",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้างานประชาสัมพันธ์",
    image: "https://www.puatc.ac.th//files/10000001_2307130884701.jpg",
  },
  {
    name: "นายธนาวัฒน์  เทพกัน",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นางสาวปรีญาภรณ์  อุตเรือน",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "https://www.puatc.ac.th//files/10000001_23071411114212.jpg",
  },
  {
    name: "นายมานะชัย  วีระวงศ์",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นางสาวรุ่งทิวา  อุดทา",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นางสาววรกมล  สุดสม",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นายวิชัย  จิตอารีย์",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นายวิทูล  อุดอ้าย",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นายศักรนันทน์  ไชยศิลป์",
    position: "ครูพิเศษสอน",
    role: "เจ้าหน้าที่ส่งเสริมผลฯ",
    image: "https://www.puatc.ac.th//files/10000001_2307130885147.jpg",
  },
  {
    name: "นายศุภกร  เชื้อหมอ",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้างานที่ปรึกษา",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นายศุภณัฐ ไชยศิลป์",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นายเสกสรรค์  ไชยศิลป์",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้างานแนะแนว",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นายเสฏฐวุฒิ  ศรีวิกะ",
    position: "ครูพิเศษสอน",
    role: "ผู้ช่วยหัวหน้างานศูนย์ข้อมูลสารสนเทศ",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นายเอกวัฒน์  เขื่อนธนะ",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นางสาวอรทัย  แรกเรียง",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นายอำนวย  กันศร",
    position: "ครูพิเศษสอน",
    role: "-",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นายเอกรัตน์  อายุยืน",
    position: "ครูพิเศษสอน",
    role: "หัวหน้าสื่อการเรียนการสอน",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
];
</script>
  
  <style scoped>
.text-center {
  text-align: center;
}
</style>
  