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
  
  <script setup>
const admins = [
  {
    name: "นายวัตพงค์ บุญเทพ",
    position: "เจ้าหน้าที่",
    role: "หัวหน้างานแนะแนวอาชีพและการจัดหางาน",
    image: "http://puatc.ac.th//files/10000001_21121315151447.jpg",
  },
  {
    name: "นางสาวอารียา จิตอารีย์",
    position: "เจ้าหน้าที่",
    role: "งานทะเบียน",
    image: "http://puatc.ac.th//files/10000001_22030110101337.jpg",
  },
  {
    name: "นางสุดารัตน์ สมบัติกำไร",
    position: "เจ้าหน้าที่",
    role: "งานกิจกรรมนักเรียนนักศึกษา",
    image: "http://puatc.ac.th//files/10000001_21121410105942.jpg",
  },
  {
    name: "นายศรีศักดิ์ อาภรณ์ศิริ",
    position: "เจ้าหน้าที่",
    role: "พนักงานขับรถ",
    image: "http://puatc.ac.th//files/10000001_21120915154051.jpg",
  },
  {
    name: "นายจตุพล ระขะไพ",
    position: "เจ้าหน้าที่",
    role: "พนักงานขับรถ",
    image: "http://puatc.ac.th//files/10000001_21120915154053.jpg",
  },
  {
    name: "นางสาวมัทนา  ยาปัน",
    position: "เจ้าหน้าที่",
    role: "งานอาคารสถานที่",
    image: "https://www.puatc.ac.th//files/10000001_23071114144315.jpg",
  },
  {
    name: "นางสาวภัทยา ธัญญะ",
    position: "เจ้าหน้าที่",
    role: "งานบุคลากร",
    image: "http://puatc.ac.th//files/10000001_21120916160025.jpg",
  },
  {
    name: "นางสาวนัทธมน  มูลคำ",
    position: "เจ้าหน้าที่",
    role: "งานส่งเสริมผลิตผลการค้า",
    image: "http://puatc.ac.th//files/10000001_23070510103807.png",
  },
  {
    name: "นางสาวปรัชญา  วรรณโกฏิ",
    position: "เจ้าหน้าที่",
    role: "งานสารบรรณ",
    image: "http://puatc.ac.th//files/10000001_23070510105800.png",
  },
  {
    name: "นางสาวกุลณัฐ  ชนาภิมุข",
    position: "เจ้าหน้าที่",
    role: "งานวัดผลและประเมินผล",
    image: "http://puatc.ac.th//files/10000001_23070510104346.png",
  },
  {
    name: "นางภัทรานิษฐ์  ชุ่มเย็น",
    position: "เจ้าหน้าที่",
    role: "งานสวัสดิการ(จำนานคูปองฯ)",
    image: "http://puatc.ac.th//files/10000001_23070510104014.png",
  },
  {
    name: "นายวีรพงษ์  อุ่มมี",
    position: "เจ้าหน้าที่",
    role: "งานศูนย์ข้อมูลสารสนเทศ",
    image: "https://www.puatc.ac.th//files/10000001_23070615151730.png",
  },
  {
    name: "นายพงษ์พิสุทธิ์ ฑีฆาวงศ์",
    position: "เจ้าหน้าที่",
    role: "งานประชาสัมพันธ์",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
];
</script>
  
  <style scoped>
.text-center {
  text-align: center;
}
</style>
  