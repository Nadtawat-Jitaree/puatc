<template>
    <v-container class="mb-5">
      <v-card class="pa-4">
        <v-card-title class="text-h6 font-weight-bold text-center">แผนผังหน่วยงาน</v-card-title>
        <div class="text-center">
          <h3 style="color: #cc0000;"><b>ข้าราชการ</b></h3>
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
  <script>
  import img1 from "@/assets/official/1.jpg";
  import img2 from "@/assets/official/2.jpg";
  import img3 from "@/assets/official/3.jpg";
  import img4 from "@/assets/official/4.jpg";
  import img5 from "@/assets/official/5.png";
  import img6 from "@/assets/official/6.jpg";
  import img7 from "@/assets/official/7.jpg";
  import avatar from "@/assets/official/avatar.png";

</script>
  <script setup>
  const admins = [
    {
      name: "นางสาวจันทิรา สุทธหลวง",
      position: "ครูชำนาญการ",
      role: "หัวหน้าการเงิน",
      image: img1,
    },
    {
      name: "นายชัยวุฒิ ธงเงิน",
      position: "ครูชำนาญการ",
      role: "หัวหน้างานทะเบียน",
      image: img2,
    },
    {
      name: "นายภควัตร วงศ์ยังประเสิรฐ",
      position: "ครูชำนาญการ",
      role: "หัวหน้างานพัสดุ",
      image: img3,
    },
    {
      name: "นายสมศักดิ์ ตันดี",
      position: "ครูชำนาญการพิเศษ",
      role: "หัวหน้าแผนกแม็คคาทรอนิกส์",
      image: img4,
    },
    {
      name: "นายภัทรวิชญ์ กำหนดศรี",
      position: "ครูผู้ช่วย",
      role: "ผู้ช่วยหัวหน้างานความร่วมมือ	",
      image: img5,
    },
    {
      name: "นายคธาวุฒิ รักษ์รงค์",
      position: "ครู",
      role: "หัวหน้างานปกครอง",
      image: img6,
    },
    {
      name: "นางสาวชนกเนตร  มะโนชัย",
      position: "ครู",
      role: "หัวหน้างานพัฒนาหลักสูตรการเรียนการสอน",
      image: avatar,
    },
    {
      name: "นายณรงค์ชัย บุญเทพ",
      position: "ครู",
      role: "หัวหน้างานวัดผลและประเมินผล",
      image: avatar,
    },
    {
      name: "นายไกรสิทธิ์ อิ่นคำ",
      position: "ครู",
      role: "หัวหน้างานวางแผนและงบประมาณ",
      image: img7,
    },
    {
      name: "นางสาวสุดาทิพย์  ไชยยะ",
      position: "ครู",
      role: "หัวหน้างานวางแผนและงบประมาณ",
      image: avatar,
    },
    {
      name: "นายไกรภพ อานัน",
      position: "ครู",
      role: "ผู้ช่วยหัวหน้างานวางแผนและงบประมาณ",
      image: avatar,
    },
    {
      name: "นายกิติกุล ทะนันไชย",
      position: "ครู",
      role: "หัวหน้างานบุคลากร",
      image: avatar,
    },
  ];
  </script>
  
  <style scoped>
  .text-center {
    text-align: center;
  }
  </style>
  